import { inject, Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, GoogleAuthProvider, sendPasswordResetEmail, signInWithPopup, User } from '@angular/fire/auth';
import { catchError, from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  private auth: Auth = inject(Auth);

  // Get current authenticated user
  getCurrentUser(): User | null {
    return this.auth.currentUser;
  }

  // Check if user is authenticated
  isAuthenticated(): boolean {
    return !!this.auth.currentUser;
  }

  // Sign up with email and password
  signUp(email: string, password: string): Observable<any> {
    return from(createUserWithEmailAndPassword(this.auth, email, password)).pipe(
      catchError(this.handleError)
    );
  }

  // Login with email and password
  signIn(email: string, password: string): Observable<any> {
    return from(signInWithEmailAndPassword(this.auth, email, password)).pipe(
      catchError(this.handleError)
    );
  }

  // Google Sign-In
  signInWithGoogle(): Observable<any> {
    const provider = new GoogleAuthProvider();
    return from(signInWithPopup(this.auth, provider)).pipe(
      catchError(this.handleError)
    );
  }

  // Password Reset
  resetPassword(email: string): Observable<void> {
    return from(sendPasswordResetEmail(this.auth, email)).pipe(
      catchError(this.handleError)
    );
  }

  // Logout
  logout(): Observable<void> {
    return from(signOut(this.auth));
  }

  // Error Handler
  private handleError(error: any): Observable<never> {
    console.error('Authentication Error', error);
    throw error;
  }
}
