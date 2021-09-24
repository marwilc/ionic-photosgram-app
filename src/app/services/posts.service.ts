import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import {
    FileTransfer,
    FileTransferObject,
    FileUploadOptions,
} from '@ionic-native/file-transfer/ngx';
import { Platform } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { Post, PostResponse } from '../models/post.model';
import { UserService } from './user.service';

@Injectable({
    providedIn: 'root',
})
export class PostsService {
    pagePost = 0;
    newPost = new EventEmitter<Post>();

    constructor(
        private http: HttpClient,
        private user: UserService,
        private transfer: FileTransfer,
        private platform: Platform
    ) {}

    getPosts(pull: boolean = false) {
        if (pull) {
            this.pagePost = 0;
        }

        this.pagePost++;

        return this.http.get<PostResponse>(
            `${environment.url}/posts/?page=${this.pagePost}`
        );
    }

    createPost(post: Post) {
        const headers = new HttpHeaders({
            'x-token': this.user.token,
        });

        return new Promise((resolve) => {
            this.http
                .post<any>(`${environment.url}/posts`, post, {
                    headers,
                })
                .subscribe((response) => {
                    if (response.ok) {
                        this.newPost.emit(response.post);
                        resolve(true);
                    } else {
                        resolve(false);
                    }
                });
        });
    }

    uploadImage(img: string) {
        if (this.platform.is('cordova')) {
            const options: FileUploadOptions = {
                fileKey: 'image',
                headers: {
                    'x-token': this.user.token,
                },
            };

            const fileTransfer: FileTransferObject =
                this.transfer.create();

            fileTransfer
                .upload(
                    img,
                    `${environment.url}/posts/upload`,
                    options
                )
                .then((data) => {})
                .catch((err) => {
                    console.log('error en carga', err);
                });
        } else {
            fetch(img)
                .then((res) => res.blob()) // Gets the response and returns it as a blob
                .then((blob) => {
                    // Here's where you get access to the blob
                    // And you can use it for whatever you want
                    // Like calling ref().put(blob)

                    // Here, I use it to make an image appear on the page

                    const formData: FormData = new FormData();

                    formData.append('image', blob, 'image.jpg');
                    this.http
                        .post(
                            `${environment.url}/posts/upload`,
                            formData,
                            {
                                headers: {
                                    'x-token': this.user.token,
                                },
                            }
                        )
                        .subscribe(
                            (res) => {},
                            (error) => {
                                console.log(error);
                            }
                        );
                });
        }
    }
}
