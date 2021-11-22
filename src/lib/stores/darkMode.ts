import { persist, localStorage } from '@macfja/svelte-persistent-store';
import { writable } from 'svelte/store';

export const darkMode = persist(writable(false), localStorage(), 'dark-theme');
