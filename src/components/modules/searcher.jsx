import React, { useState, useEffect } from 'react';

import '../../static/css/searcher.css';

export default function Searcher() {
   
    return (

        <div id="searcher_wrapper" class="input-group w-25 d-none d-sm-flex ">
            <input type="text" placeholder="Search..." class="form-control w-50" aria-label="Text input with dropdown button" />
            <div class="input-group-append" >
                <button class="btn btn-light dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Options</button>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                    <div role="separator" class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Separated link</a>
                </div>
            </div>
        </div>

    )

}