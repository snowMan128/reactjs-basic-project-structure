import React from 'react';
import {toast, Zoom} from 'react-toastify';

let options = {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    transition: Zoom,
    rtl: true
};

export const toasts = {
    error: function (message, icon = '') {
        message = <span>{message}</span>;
        toast.error(message, options);
    },
    info: function (message, icon = '') {
        message = <span>{message}</span>;
        toast.info(message, options);
    },
    success: function (message, icon = '', opts) {
        message = <span>{message}</span>;
        options = Object.assign(options, opts);
        toast.success(message, options);
    },
    warning: function (message, icon = '') {
        message = <span>{message}</span>;
        toast.warning(message, options);
    },
};