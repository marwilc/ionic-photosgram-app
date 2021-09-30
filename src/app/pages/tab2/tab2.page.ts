import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import {
    Camera,
    CameraResultType,
    CameraSource,
    ImageOptions,
} from '@capacitor/camera';
import { Geolocation } from '@capacitor/geolocation';
import { Platform } from '@ionic/angular';
import { Post } from 'src/app/models/post.model';
import { PostsService } from 'src/app/services/posts.service';

// eslint-disable-next-line no-var
declare var window: any;
@Component({
    selector: 'app-tab2',
    templateUrl: 'tab2.page.html',
    styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
    tempImages: string[] = [];

    post: Post = {
        coords: null,
        imgs: [],
        message: '',
        position: false,
    };

    loadingGeo = false;
    postAttempt = false;

    constructor(
        private postService: PostsService,
        private route: Router,
        private domSanitizer: DomSanitizer,
        private platform: Platform
    ) {}

    async getGeo() {
        if (!this.post.position) {
            this.post.coords = null;
            return;
        }

        this.loadingGeo = true;

        const coordinates = await Geolocation.getCurrentPosition();

        this.loadingGeo = false;

        const coords = `${coordinates.coords.latitude},${coordinates.coords.longitude}`;

        this.post.coords = coords;
    }

    async createPost() {
        this.postAttempt = true;

        const created = await this.postService.createPost(this.post);

        this.post = {
            message: '',
            coords: null,
            position: false,
        };

        this.tempImages = [];
        this.postAttempt = false;
        this.route.navigateByUrl('/main/tabs/tab1');
    }

    async imageProcess(options: ImageOptions) {
        const result = await Camera.getPhoto(options);

        const image = result.webPath;

        this.postService.uploadImage(
            this.platform.is('cordova') ? result.path : image
        );
        this.tempImages.push(image);
    }

    async showCamera() {
        const options: ImageOptions = {
            resultType: CameraResultType.Uri,
            quality: 60,
            correctOrientation: true,
            source: CameraSource.Camera,
        };

        this.imageProcess(options);
    }

    async openGallery() {
        const options: ImageOptions = {
            resultType: CameraResultType.Uri,
            quality: 60,
            correctOrientation: true,
            source: CameraSource.Photos,
        };

        this.imageProcess(options);
    }

    sanitize(image) {
        return this.domSanitizer.bypassSecurityTrustUrl(image);
    }
}
