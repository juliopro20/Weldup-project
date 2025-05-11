import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

//firebase configurations
const firebaseConfig = {
  apiKey: "AIzaSyBagPhweqU9pBFnD4bC5Kr9frCMtSIQ8hQ",
  authDomain: "weldup-app.firebaseapp.com",
  projectId: "weldup-app",
  storageBucket: "weldup-app.firebasestorage.app",
  messagingSenderId: "25559080328",
  appId: "1:25559080328:web:52bebb662d44c11727ae3d",
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes), 
    provideClientHydration(), 
    provideAnimationsAsync(),

    //setup the providers for firebase
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth())
  ]
};
