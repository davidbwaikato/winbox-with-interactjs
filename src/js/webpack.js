import WinBox from "./winbox.js";

/** @export */ WinBox.new;
/** @export */ WinBox.prototype.mount;
/** @export */ WinBox.prototype.unmount;
/** @export */ WinBox.prototype.move;
/** @export */ WinBox.prototype.resize;
/** @export */ WinBox.prototype.close;
/** @export */ WinBox.prototype.focus;
/** @export */ WinBox.prototype.blur;
/** @export */ WinBox.prototype.hide;
/** @export */ WinBox.prototype.show;
/** @export */ WinBox.prototype.minimize;
/** @export */ WinBox.prototype.maximize;
/** @export */ WinBox.prototype.fullscreen;
/** @export */ WinBox.prototype.restore;
/** @export */ WinBox.prototype.setBackground;
/** @export */ WinBox.prototype.setTitle;
/** @export */ WinBox.prototype.setIcon;
/** @export */ WinBox.prototype.setUrl;
/** @export */ WinBox.prototype.addClass;
/** @export */ WinBox.prototype.removeClass;
/** @export */ WinBox.prototype.toggleClass;
/** @export */ //WinBox.prototype.use;

/** @export */ WinBox.id;
/** @export */ WinBox.window;
/** @export */ WinBox.index;
/** @export */ WinBox.body;
/** @export */ WinBox.min;
/** @export */ WinBox.max;
/** @export */ WinBox.full;
/** @export */ WinBox.hidden;
/** @export */ WinBox.focused;
/** @export */ WinBox.x;
/** @export */ WinBox.y;
/** @export */ WinBox.width;
/** @export */ WinBox.height;
/** @export */ WinBox.top;
/** @export */ WinBox.right;
/** @export */ WinBox.bottom;
/** @export */ WinBox.left;

/** @export */ WinBox.oncreate;
/** @export */ WinBox.onclose;
/** @export */ WinBox.onfocus;
/** @export */ WinBox.onblur;
/** @export */ WinBox.onmove;
/** @export */ WinBox.onresize;
/** @export */ WinBox.onfullscreen;
/** @export */ WinBox.onmaximize;
/** @export */ WinBox.onminimize;
/** @export */ WinBox.onrestore;
/** @export */ WinBox.onhide;
/** @export */ WinBox.onshow;

window["WinBox"] = WinBox;
