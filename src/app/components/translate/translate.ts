import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-translate',
  imports: [],
  templateUrl: './translate.html',
  styleUrl: './translate.css',
})
export class Translate implements AfterViewInit {

  ngAfterViewInit(): void {
    this.loadGoogleTranslate();
  }

  /**
   * Carga el widget de Google Translate
   */
  private loadGoogleTranslate(): void {

    // Evita cargar el script más de una vez
    if (document.getElementById('google-translate-script')) {
      return;
    }

    // Función que Google ejecutará cuando termine de cargar
    (window as any).googleTranslateElementInit = () => {

      const google = (window as any).google;

      if (!google?.translate) {
        console.error('Google Translate no está disponible');
        return;
      }

      new google.translate.TranslateElement(
        {
          pageLanguage: 'es',
          includedLanguages: 'es,en',
          autoDisplay: false,
        },
        'google_translate_element'
      );
    };

    // Crear el script de Google Translate
    const script = document.createElement('script');

    script.id = 'google-translate-script';

    script.src =
      'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';

    script.async = true;

    document.body.appendChild(script);
  }

  /**
   * Cambia el idioma del sitio
   */
  changeLanguage(language: 'es' | 'en'): void {

    const sourceLanguage = 'es';

    // Español = idioma original
    if (language === sourceLanguage) {
      this.clearGoogleTranslateCookie();
    }

    // Inglés = traducción
    else {
      this.setGoogleTranslateCookie(
        `/${sourceLanguage}/${language}`
      );
    }

    // Google Translate necesita recargar la página
    window.location.reload();
  }

  /**
   * Establece la cookie utilizada por Google Translate
   */
  private setGoogleTranslateCookie(value: string): void {

    // Cookie para el dominio actual
    document.cookie =
      `googtrans=${value};path=/`;

    // Cookie específica del dominio
    document.cookie =
      `googtrans=${value};path=/;domain=${window.location.hostname}`;
  }

  /**
   * Elimina la traducción y vuelve al idioma original
   */
  private clearGoogleTranslateCookie(): void {

    document.cookie =
      'googtrans=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/';

    document.cookie =
      `googtrans=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;domain=${window.location.hostname}`;
  }
}