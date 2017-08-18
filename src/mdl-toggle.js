import m from 'mithril';
import { MdlBase } from './mdl-base';
import { MdlButton } from './mdl-button';
import { MdlIcon } from './mdl-icon';

export class MdlToggle extends MdlBase {
    constructor() {
        super();
        this.checked = false;
    }

    oninit(vnode) {
        super.oninit(vnode);// no classlist?

        this.colorActive = vnode.attrs.colorActive ? vnode.attrs.colorActive : "primary";
        this.colorInactive = vnode.attrs.colorInactive ? vnode.attrs.colorInactive : "grey";
        this.iconActive = vnode.attrs.iconActive ? vnode.attrs.iconActive : "check_box";
        this.iconInactive = vnode.attrs.iconInactive ? vnode.attrs.iconInactive : "check_box_outline_blank";

        this.checked = vnode.attrs.checked;
        this.oldAttrCheckedValue = vnode.attrs.checked;

        if (vnode.attrs.icon) {
            this.iconActive = vnode.attrs.icon;
            this.iconInactive = vnode.attrs.icon;//setting same for both
        }

        this.toggleInternal = false;
        this.initIcon();
    }

    initIcon() {
        //console.log("init icon");

        if (this.checked) {
            this.icon = this.iconActive;
            this.color = this.colorActive;
        }
        else {
            this.icon = this.iconInactive;
            this.color = this.colorInactive;
        }
    }

    //onbefore update für old val und internal checked
    onbeforeupdate(vnode, old) {
        //console.log("on before update");

        if (this.oldAttrCheckedValue != vnode.attrs.checked) {
            this.oldAttrCheckedValue = vnode.attrs.checked;
            this.checked = !this.checked;
        }

        if (this.toggleInternal)
            this.checked = !this.checked;

        this.toggleInternal = false;

        this.initIcon();

        return true;
    }

    view(vnode) {

        return (
            <div>
                <MdlButton icon onclick={(e) => { this.toggleInternal = true; vnode.attrs.onclick ? vnode.attrs.onclick(e) : null; }}>
                    <MdlIcon icon={this.icon} color={this.color} />
                </MdlButton>
            </div>
        )
    }
}