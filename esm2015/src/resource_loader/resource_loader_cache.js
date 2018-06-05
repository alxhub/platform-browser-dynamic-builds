/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ResourceLoader } from '@angular/compiler';
import { ɵglobal as global } from '@angular/core';
/**
 * An implementation of ResourceLoader that uses a template cache to avoid doing an actual
 * ResourceLoader.
 *
 * The template cache needs to be built and loaded into window.$templateCache
 * via a separate mechanism.
 */
export class CachedResourceLoader extends ResourceLoader {
    constructor() {
        super();
        this._cache = (/** @type {?} */ (global)).$templateCache;
        if (this._cache == null) {
            throw new Error('CachedResourceLoader: Template cache was not found in $templateCache.');
        }
    }
    /**
     * @param {?} url
     * @return {?}
     */
    get(url) {
        if (this._cache.hasOwnProperty(url)) {
            return Promise.resolve(this._cache[url]);
        }
        else {
            return /** @type {?} */ (Promise.reject('CachedResourceLoader: Did not find cached template for ' + url));
        }
    }
}
function CachedResourceLoader_tsickle_Closure_declarations() {
    /** @type {?} */
    CachedResourceLoader.prototype._cache;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb3VyY2VfbG9hZGVyX2NhY2hlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljL3NyYy9yZXNvdXJjZV9sb2FkZXIvcmVzb3VyY2VfbG9hZGVyX2NhY2hlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFBQyxPQUFPLElBQUksTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7Ozs7OztBQVNoRCxNQUFNLDJCQUE0QixTQUFRLGNBQWM7SUFHdEQ7UUFDRSxLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksQ0FBQyxNQUFNLEdBQUcsbUJBQU0sTUFBTSxFQUFDLENBQUMsY0FBYyxDQUFDO1FBQzNDLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLEVBQUU7WUFDdkIsTUFBTSxJQUFJLEtBQUssQ0FBQyx1RUFBdUUsQ0FBQyxDQUFDO1NBQzFGO0tBQ0Y7Ozs7O0lBRUQsR0FBRyxDQUFDLEdBQVc7UUFDYixJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ25DLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDMUM7YUFBTTtZQUNMLHlCQUFxQixPQUFPLENBQUMsTUFBTSxDQUMvQix5REFBeUQsR0FBRyxHQUFHLENBQUMsRUFBQztTQUN0RTtLQUNGO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7UmVzb3VyY2VMb2FkZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvbXBpbGVyJztcbmltcG9ydCB7ybVnbG9iYWwgYXMgZ2xvYmFsfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBBbiBpbXBsZW1lbnRhdGlvbiBvZiBSZXNvdXJjZUxvYWRlciB0aGF0IHVzZXMgYSB0ZW1wbGF0ZSBjYWNoZSB0byBhdm9pZCBkb2luZyBhbiBhY3R1YWxcbiAqIFJlc291cmNlTG9hZGVyLlxuICpcbiAqIFRoZSB0ZW1wbGF0ZSBjYWNoZSBuZWVkcyB0byBiZSBidWlsdCBhbmQgbG9hZGVkIGludG8gd2luZG93LiR0ZW1wbGF0ZUNhY2hlXG4gKiB2aWEgYSBzZXBhcmF0ZSBtZWNoYW5pc20uXG4gKi9cbmV4cG9ydCBjbGFzcyBDYWNoZWRSZXNvdXJjZUxvYWRlciBleHRlbmRzIFJlc291cmNlTG9hZGVyIHtcbiAgcHJpdmF0ZSBfY2FjaGU6IHtbdXJsOiBzdHJpbmddOiBzdHJpbmd9O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fY2FjaGUgPSAoPGFueT5nbG9iYWwpLiR0ZW1wbGF0ZUNhY2hlO1xuICAgIGlmICh0aGlzLl9jYWNoZSA9PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NhY2hlZFJlc291cmNlTG9hZGVyOiBUZW1wbGF0ZSBjYWNoZSB3YXMgbm90IGZvdW5kIGluICR0ZW1wbGF0ZUNhY2hlLicpO1xuICAgIH1cbiAgfVxuXG4gIGdldCh1cmw6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgaWYgKHRoaXMuX2NhY2hlLmhhc093blByb3BlcnR5KHVybCkpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5fY2FjaGVbdXJsXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiA8UHJvbWlzZTxhbnk+PlByb21pc2UucmVqZWN0KFxuICAgICAgICAgICdDYWNoZWRSZXNvdXJjZUxvYWRlcjogRGlkIG5vdCBmaW5kIGNhY2hlZCB0ZW1wbGF0ZSBmb3IgJyArIHVybCk7XG4gICAgfVxuICB9XG59XG4iXX0=