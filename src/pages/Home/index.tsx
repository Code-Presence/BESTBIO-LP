import React from 'react';

export const FirstSec = React.lazy(() => import ('./Sections/1').then(module => {
    return {default: module.FirstSection};
}));

export const SecondSec = React.lazy(() => import ('./Sections/2').then(module => {
    return {default: module.SecondSection};
}));

export const ThirdSec = React.lazy(() => import ('./Sections/3').then(module => {
    return {default: module.ThirdSection};
}));

export const FourthSec = React.lazy(() => import ('./Sections/4').then(module => {
    return {default: module.FourthSection};
}));

export const FifthSec = React.lazy(() => import ('./Sections/5').then(module => {
    return {default: module.FifthSection};
}));