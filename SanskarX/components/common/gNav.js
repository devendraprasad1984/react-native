import * as React from 'react';

export const navigationRef = React.createRef();
export function navigate(name, params) {
    // console.log('nav gnav',name,navigationRef);
    navigationRef.current?.navigate(name, params);
}
