import m from 'mithril';
import { MdlBase } from './mdl-base';

export class MdlTable extends MdlBase {
    oninit(vnode) {
        this.classList.push("mdl-data-table", "mdl-js-data-table", "mdl-shadow--2dp");
        vnode.attrs.selectable ? this.classList.push("mdl-data-table--selectable") : null;
        vnode.attrs.sortasc ? this.classList.push("mdl-data-table__header--sorted-ascending") : null;
        vnode.attrs.sortdesc ? this.classList.push("mdl-data-table__header--sorted-descending") : null;
    }

    view(vnode) {
        return (
            <table
                class={this.classList.join(" ")}
            >
                {vnode.children}
            </table>
        )
    }
}