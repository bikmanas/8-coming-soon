import { clock } from './components/clock.js';
import { progressBar } from './components/progressBar.js';
import { socials } from './components/socials.js';
import { progressBarData } from './data/progressBarData.js';
import { socialsData } from './data/socialsData.js';

clock ('#clock_birthday', '03-15');

progressBar('.left-column', progressBarData);
socials('.socials-content', socialsData);