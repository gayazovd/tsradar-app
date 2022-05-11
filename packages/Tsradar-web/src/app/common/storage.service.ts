import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class LocalStorage {
  [key: string]: any;
  [index: number]: string;

  public setItem(name: string, item: string): void {
    localStorage.setItem(name, item);
  }

  public getItem(name: string): string | null {
    return localStorage.getItem(name);
  }

  public removeItem(name: string): void {
    localStorage.removeItem(name);
  }

  public clear(): void {
    return localStorage.clear();
  }

  public key(index: number): string | null {
    return localStorage.key(index);
  }
}
