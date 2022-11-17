import React, { useState, useEffect } from 'react';
import Map from '../modules/map.jsx';
import Searcher from '../modules/searcher.jsx';

export default function Content() {   
    return (
        <>
            <Searcher />
            <Map /> 
        </>
    )
}