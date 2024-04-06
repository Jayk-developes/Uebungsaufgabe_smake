// store/index.ts
import {defineStore} from 'pinia';

export const useMyStore = defineStore({
    id: 'myStore',
    state: ()=> ({
        data: {
            color: '#0f0',
            colorName: "Green",
            img: '',
            imgName: "",
            price: 11.09
        }
    }),
    actions: {
        setData(color: string, img: string) {
            if (color != "") {
                this.data.color = color;
            }
            if (img != "") {
                this.data.img = img;
            }
        }
    }
});