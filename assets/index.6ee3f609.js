var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,c=(t,a,r)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r,i=(e,t)=>{for(var a in t||(t={}))l.call(t,a)&&c(e,a,t[a]);if(r)for(var a of r(t))n.call(t,a)&&c(e,a,t[a]);return e},s=(e,r)=>t(e,a(r));import{D as o,a as m,u as d,b as _,R as E,c as p,L as u,C,d as h,e as g,f as v,g as y,t as w,h as f,B as L,P as x}from"./vendor.49fe3715.js";function N(e){return o.exports.createElement("svg",i({width:105,height:32,viewBox:"0 0 105 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),o.exports.createElement("path",{d:"M0 31.5467V0.292001H6.04633V31.5467H0Z",fill:"white"}),o.exports.createElement("path",{d:"M12.5315 31.5467V0.292001H26.2903C27.7224 0.292001 29.042 0.593671 30.2547 1.19411C31.4675 1.79455 32.5127 2.58933 33.3876 3.56976C34.2654 4.55309 34.9497 5.66694 35.4464 6.91423C35.943 8.16152 36.1913 9.41751 36.1913 10.6793C36.1913 12.704 35.686 14.5459 34.6783 16.2022C33.6706 17.8614 32.3048 19.0564 30.581 19.7903L37.6784 31.5438H30.8871L24.5347 21.0666H18.5779V31.5438H12.5315V31.5467ZM18.5779 15.7439H26.1574C26.7118 15.7439 27.2316 15.6104 27.7138 15.3465C28.196 15.0825 28.6118 14.7228 28.964 14.2674C29.3134 13.812 29.5906 13.2783 29.7956 12.6605C30.0006 12.0455 30.1017 11.3842 30.1017 10.6793C30.1017 9.94543 29.9833 9.26958 29.7523 8.65463C29.5184 8.03969 29.2037 7.50307 28.811 7.04766C28.4154 6.59226 27.9621 6.24128 27.4539 5.99182C26.9428 5.74236 26.4231 5.61763 25.8976 5.61763H18.5779V15.7439Z",fill:"white"}),o.exports.createElement("path",{d:"M41.6717 31.5467V0.292001H47.718V26.2182H63.5817V31.5438H41.6717V31.5467Z",fill:"white"}),o.exports.createElement("path",{d:"M67.2603 31.5467V0.292001H73.3066V31.5467H67.2603Z",fill:"white"}),o.exports.createElement("path",{d:"M104.985 0.0976562H98.4563L94.053 6.73439L97.183 11.2536L104.985 0.0976562Z",fill:"white"}),o.exports.createElement("path",{d:"M104.506 31.2567L90.845 11.5698L87.0706 5.99182L82.9883 0.0976562H76.4164L87.5014 15.9469L76.7658 31.3524H83.3405L90.744 20.1703L98.107 31.3524H104.635L104.569 31.2567H104.506Z",fill:"white"}))}const b=(e="",t="")=>async a=>{a({type:"SET_LOADED",payload:!1});let r=`https://610bb9122b6add0017cb3a45.mockapi.io/api/v1/cocktail/${e||"?"+t+"=true"}`;const l=await m.get(r),n=await l.data;a(e?O(n):k(n))},k=e=>({type:"SET_COCKTAILS",payload:e}),O=e=>({type:"SET_DETAILED",payload:e});function S({children:e}){const t=new Date,a=d(),r=_((({category:e})=>e));return E.createElement("div",{className:"header"},E.createElement("div",{className:"header__top"},E.createElement("div",{className:"header__top__title"},E.createElement("h1",null,e),E.createElement("span",{className:"header__top__title__date"},`${t.getDate()} ${["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"][t.getMonth()]} ${t.getFullYear()}`)),E.createElement("div",{className:"header__top__logo"},E.createElement(N,{className:"icon"}),E.createElement("span",null,"pub"))),E.createElement(V,{category:r,onSelectCategory:e=>{a(b(!1,e)),a({type:"SET_CATEGORY",payload:e})},items:[{name:"Все",category:""},{name:"Новинки",category:"isNew"},{name:"Сладкие",category:"isSweet"},{name:"Хит",category:"isTop"},{name:"Лонг",category:"isLong"}]}))}function V({category:e,onSelectCategory:t,items:a}){return E.createElement("div",{className:"categories"},E.createElement("ul",{className:"categories__list"},a.map(((a,r)=>E.createElement("li",{key:a.name,onClick:()=>t(a.category),className:p("categories__list__item",{"categories__list__item--active":a.category===e})},a.name)))))}function T(e){return o.exports.createElement("svg",i({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),o.exports.createElement("path",{d:"M23.6736 20.7495L18.9998 16.0766C18.7889 15.8656 18.5029 15.7485 18.2029 15.7485H17.4388C18.7326 14.0939 19.5014 12.0129 19.5014 9.74905C19.5014 4.36364 15.137 0 9.75071 0C4.36438 0 0 4.36364 0 9.74905C0 15.1345 4.36438 19.4981 9.75071 19.4981C12.0149 19.4981 14.0963 18.7294 15.7512 17.4358V18.1998C15.7512 18.4998 15.8683 18.7857 16.0793 18.9966L20.7531 23.6696C21.1937 24.1101 21.9063 24.1101 22.3423 23.6696L23.6689 22.3431C24.1096 21.9025 24.1096 21.1901 23.6736 20.7495ZM9.75071 15.7485C6.43641 15.7485 3.75027 13.0675 3.75027 9.74905C3.75027 6.43531 6.43172 3.74963 9.75071 3.74963C13.065 3.74963 15.7512 6.43062 15.7512 9.74905C15.7512 13.0628 13.0697 15.7485 9.75071 15.7485Z",fill:"#C4C1CF"}))}function H(e){return o.exports.createElement("svg",i({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),o.exports.createElement("path",{d:"M14.8173 11.9983L23.409 3.42536C23.7852 3.04906 23.9966 2.53869 23.9966 2.00653C23.9966 1.47437 23.7852 0.963996 23.409 0.587699C23.0327 0.211402 22.5224 0 21.9903 0C21.4583 0 20.948 0.211402 20.5717 0.587699L12 9.18062L3.42828 0.587699C3.05204 0.211402 2.54174 -3.96493e-09 2.00965 0C1.47757 3.96494e-09 0.967269 0.211402 0.591025 0.587699C0.214782 0.963996 0.00340991 1.47437 0.00340991 2.00653C0.0034099 2.53869 0.214782 3.04906 0.591025 3.42536L9.18272 11.9983L0.591025 20.5712C0.40375 20.757 0.255105 20.978 0.153666 21.2215C0.0522265 21.4651 0 21.7263 0 21.9901C0 22.2539 0.0522265 22.5151 0.153666 22.7586C0.255105 23.0021 0.40375 23.2231 0.591025 23.4089C0.776772 23.5962 0.99776 23.7449 1.24124 23.8463C1.48473 23.9478 1.74589 24 2.00965 24C2.27342 24 2.53458 23.9478 2.77807 23.8463C3.02155 23.7449 3.24254 23.5962 3.42828 23.4089L12 14.816L20.5717 23.4089C20.7575 23.5962 20.9785 23.7449 21.2219 23.8463C21.4654 23.9478 21.7266 24 21.9903 24C22.2541 24 22.5153 23.9478 22.7588 23.8463C23.0022 23.7449 23.2232 23.5962 23.409 23.4089C23.5962 23.2231 23.7449 23.0021 23.8463 22.7586C23.9478 22.5151 24 22.2539 24 21.9901C24 21.7263 23.9478 21.4651 23.8463 21.2215C23.7449 20.978 23.5962 20.757 23.409 20.5712L14.8173 11.9983Z",fill:"#C4C1CF"}))}function F({children:e}){return E.createElement("button",{className:"button"},e)}function M({searchValue:e,onChange:t,buttonLink:a,buttonValue:r}){const[l,n]=o.exports.useState(!1),c=()=>{n(!l)};return E.createElement("div",{className:"footer"},E.createElement("div",{className:p("footer__wrapper",{"footer__wrapper--search":l})},l?E.createElement(E.Fragment,null,E.createElement("input",{type:"text",value:e,onChange:e=>t(e)}),E.createElement(H,{className:"icon icon__close",onClick:c})):E.createElement(E.Fragment,null,E.createElement(u,{to:a},E.createElement(F,null,r)),E.createElement(T,{className:"icon icon__search",onClick:c}))))}function D(e){return o.exports.createElement("svg",i({width:20,height:33,viewBox:"0 0 20 33",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),o.exports.createElement("path",{d:"M18 0H2C1.46957 0 0.96086 0.210714 0.585787 0.585786C0.210715 0.960859 6.3813e-07 1.46957 6.3813e-07 2V29.93C-0.000315943 30.3264 0.117168 30.7139 0.337535 31.0434C0.557902 31.3729 0.871212 31.6295 1.23768 31.7806C1.60416 31.9317 2.00726 31.9705 2.39582 31.892C2.78438 31.8136 3.14086 31.6214 3.42 31.34L9.96 24.82L16.59 31.42C16.8703 31.6986 17.2268 31.8879 17.6146 31.9641C18.0024 32.0403 18.404 31.9998 18.7688 31.8479C19.1337 31.696 19.4453 31.4394 19.6644 31.1105C19.8835 30.7816 20.0003 30.3952 20 30V2C20 1.46957 19.7893 0.960859 19.4142 0.585786C19.0391 0.210714 18.5304 0 18 0Z",fill:"#C4C1CF"}))}function A({cocktail:e}){const t=d(),a=e=>{var a;t((a=e,e=>(m.put(`https://610bb9122b6add0017cb3a45.mockapi.io/api/v1/cocktail/${a.id}`,{isFavorite:!a.isFavorite}),e((e=>({type:"TOGGLE_FAVORITE",payload:e}))(a)))))};return E.createElement("div",{className:"card"},E.createElement(u,{to:"/detail",onClick:()=>{t(b(e.id))}}),E.createElement(D,{onClick:()=>a(e),className:p("icon__favorited",{"icon__favorited--active":e.isFavorite})}),E.createElement("div",{className:"card__main"},E.createElement("div",{className:"card__main__header"},E.createElement("h3",null,e.alcohol,"%"),E.createElement("span",null,"Алкоголь")),E.createElement("div",{className:"card__main__footer"},E.createElement("h3",null,e.name),E.createElement("span",{className:"drink__description"},e.comment))),E.createElement("picture",null,E.createElement("source",{srcSet:e.photoUrl+".webp"}),E.createElement("img",{src:e.photoUrl+".jpg",alt:"Изображение"+e.name})))}const Z=()=>E.createElement(C,{className:"card",speed:2,width:320,height:420,viewBox:"0 0 320 420",backgroundColor:"#c7c7c7",foregroundColor:"#575757"},E.createElement("rect",{x:"33",y:"17",rx:"24",ry:"24",width:"94",height:"87"}),E.createElement("rect",{x:"33",y:"352",rx:"8",ry:"8",width:"206",height:"21"}),E.createElement("rect",{x:"34",y:"378",rx:"8",ry:"8",width:"156",height:"15"}),E.createElement("rect",{x:"0",y:"0",rx:"0",ry:"0",width:"2",height:"420"}),E.createElement("rect",{x:"318",y:"0",rx:"0",ry:"0",width:"2",height:"420"}),E.createElement("rect",{x:"0",y:"0",rx:"0",ry:"0",width:"320",height:"2"}),E.createElement("rect",{x:"0",y:"418",rx:"0",ry:"0",width:"320",height:"2"}));function j(){return E.createElement("div",{className:"card card--empty"},E.createElement("div",{className:"card__main"},E.createElement("div",{className:"card__main__header"},E.createElement("h3",null,"Нет результатов")),E.createElement("div",{className:"card__main__footer"},E.createElement("h3",null,"Пусто"),E.createElement("span",{className:"drink__description"},"Попробуйте изменить запрос"))),E.createElement("picture",null,E.createElement("source",{srcSet:"src/assets/img/card-empty.webp"}),E.createElement("img",{src:"src/assets/img/card-empty.jpg",alt:"Пустой результат"})))}function I(){const e=d(),t=_((({items:e})=>e)),a=_((({isLoaded:e})=>e)),[r,l]=o.exports.useState("");o.exports.useEffect((()=>{e(b())}),[]);const n=t.filter((e=>e.name.toLowerCase().includes(r.toLocaleLowerCase())));return E.createElement("div",{className:"content"},E.createElement(S,null,"Главная"),E.createElement("div",{className:"content__box"},E.createElement("div",{className:"notification"},"Добавлено в избранное"),a?t.length?n.map((e=>E.createElement(A,{key:e.id,cocktail:e}))):E.createElement(j,null):Array(4).fill(null).map(((e,t)=>E.createElement(Z,{key:t})))),E.createElement(M,{searchValue:r,onChange:e=>{l(e.target.value)},buttonLink:"/favorites",buttonValue:"Избранные"}))}function B(e){return o.exports.createElement("svg",i({width:15,height:24,viewBox:"0 0 15 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),o.exports.createElement("path",{d:"M0.383924 11.0671L11.0016 0.386228C11.5135 -0.128743 12.3439 -0.128743 12.8558 0.386228L14.0943 1.63216C14.6056 2.14658 14.6062 2.97977 14.0965 3.49529L5.68155 11.9997L14.0959 20.5047C14.6062 21.0202 14.6051 21.8534 14.0937 22.3678L12.8552 23.6138C12.3433 24.1287 11.5129 24.1287 11.001 23.6138L0.383924 12.9324C-0.127974 12.4174 -0.127974 11.582 0.383924 11.0671Z",fill:"#C4C1CF"}))}function P(){const e=_((({detailedCocktail:e})=>e)),t=_((({isLoaded:e})=>e));return E.createElement("div",{className:"detailed__card"},E.createElement(u,{to:"../react-irlix-pub/",className:"detailed__card__button"},E.createElement(B,null)),t?E.createElement("div",{className:"detailed__card__wrapper"},E.createElement("div",{className:"detailed__card__header"},E.createElement("div",{className:"detailed__card__header__title"},E.createElement("h3",null,e.name),E.createElement("span",{className:"drink__description"},e.comment)),E.createElement("div",{className:"detailed__card__header__ingredients"},E.createElement("h4",null,"Ингредиенты"),E.createElement("ul",{className:"detailed__card__header__ingredients__list"},e.ingredients&&e.ingredients.map(((e,t)=>E.createElement("li",{key:t,className:"detailed__card__header__ingredients__list__item"},E.createElement("span",{className:"ingredient__name"},e.name),E.createElement("span",{className:"divider"}),E.createElement("span",{className:"ingredient__amount"},e.amount))))))),E.createElement("div",{className:"detailed__card__footer"},E.createElement("h4",null,"Как готовить"),E.createElement("ul",{className:"detailed__card__footer__recipe"},e.recipe.map(((e,t)=>E.createElement("li",{key:t,className:"detailed__card__footer__recipe__item"},e)))))):"Loading",E.createElement("picture",null,E.createElement("source",{srcSet:e.photoUrl+".webp"}),E.createElement("img",{src:e.photoUrl+".jpg",alt:"Изображение"+e.name})))}function R(){const e=d(),t=_((({items:e})=>e)),a=_((({isLoaded:e})=>e)),[r,l]=o.exports.useState("");o.exports.useEffect((()=>{e(b())}),[]);const n=t.filter((e=>e.isFavorite&&e.name.toLowerCase().includes(r.toLocaleLowerCase())));return E.createElement("div",{className:"content"},E.createElement(S,null,"Избранные"),E.createElement("div",{className:"content__box"},a?n.length?n.map((e=>E.createElement(A,{to:"/det",key:e.id,cocktail:e}))):E.createElement(j,null):Array(4).fill(null).map(((e,t)=>E.createElement(Z,{key:t})))),E.createElement(M,{searchValue:r,onChange:e=>{l(e.target.value)},buttonLink:"../react-irlix-pub/",buttonValue:"Назад"}))}function G(){return E.createElement("div",{className:"wrapper"},E.createElement(h,{path:"/react-irlix-pub/",component:I,exact:!0}),E.createElement(h,{path:"/detail",component:P,exact:!0}),E.createElement(h,{path:"/favorites",component:R,exact:!0}))}const U={items:[],detailedCocktail:{},category:"",isLoaded:!1},$=g(((e=U,t)=>{switch(t.type){case"SET_LOADED":return s(i({},e),{isLoaded:t.payload});case"SET_COCKTAILS":return s(i({},e),{items:t.payload,isLoaded:!0});case"SET_DETAILED":return s(i({},e),{detailedCocktail:t.payload,isLoaded:!0});case"SET_FAVORITE":return s(i({},e),{favorites:[...e.favorites,t.payload]});case"TOGGLE_FAVORITE":return s(i({},e),{items:e.items.map((e=>{const a=e.id===t.payload.id&&s(i({},e),{isFavorite:!e.isFavorite});return e.id===t.payload.id&&e.isFavorite,a||e}))});case"SET_CATEGORY":return s(i({},e),{category:t.payload});default:return e}}),(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||y)(v(w)));f.render(E.createElement(E.StrictMode,null,E.createElement(L,null,E.createElement(x,{store:$},E.createElement(G,null)))),document.getElementById("root"));
