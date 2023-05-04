!function(){"use strict";var e=window.wp.element,t=window.wp.plugins,s=window.wp.editPost,a=window.wp.compose,i=window.wp.data,n=window.wp.i18n,l={logo:(0,e.createElement)("svg",{className:"swt-page-settings-button",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 70 70",fill:"none"}," ",(0,e.createElement)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M35 70C54.33 70 70 54.33 70 35C70 15.67 54.33 0 35 0C15.67 0 0 15.67 0 35C0 54.33 15.67 70 35 70ZM24.4471 23.5112C18.9722 26.7403 20.2852 35.3759 26.5032 37.0351L36.8875 39.806C37.7533 40.037 37.91 41.224 37.135 41.6811L27.0972 47.5799L26.036 58L45.5529 46.4888C51.0278 43.2597 49.7148 34.6241 43.4968 32.9649L33.1125 30.1941C32.2467 29.963 32.09 28.776 32.865 28.3189L42.9028 22.4202L43.964 12L24.4471 23.5112Z"})," ")};function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a])}return e},r.apply(this,arguments)}var o=window.wp.components,c=window.wp.blockEditor,d=window.wp.hooks;const u=t=>{let s,a;return t.hasOwnProperty("setAttributes")?(s=!(!t?.attributes?.SWTStickyHeader||!t.attributes.SWTStickyHeader),a=!(!t?.attributes?.SWTTransparentHeader||!t.attributes.SWTTransparentHeader)):(s=!(!t?.meta.swt_meta_sticky_header||!t.meta.swt_meta_sticky_header),a=!(!t?.meta.swt_meta_transparent_header||!t.meta.swt_meta_transparent_header)),(0,e.createElement)(e.Fragment,null,!a&&(0,e.createElement)(o.PanelRow,null,(0,e.createElement)(o.ToggleControl,{label:(0,n.__)("Enable Sticky Header","spectra-one"),help:s?(0,n.__)("Transparent header option will be disabled on enabling this option.","spectra-one"):"",checked:s,onChange:e=>t.hasOwnProperty("setAttributes")?t.setAttributes({SWTStickyHeader:!s}):t.setMetaFieldValue(e,"swt_meta_sticky_header")})),!s&&(0,e.createElement)(o.PanelRow,null,(0,e.createElement)(o.ToggleControl,{label:(0,n.__)("Enable Transparent Header","spectra-one"),help:a?(0,n.__)("Sticky header option will be disabled on enabling this option.","spectra-one"):"",checked:a,onChange:e=>t.hasOwnProperty("setAttributes")?t.setAttributes({SWTTransparentHeader:!a}):t.setMetaFieldValue(e,"swt_meta_transparent_header")})))},p=(0,a.createHigherOrderComponent)((t=>s=>{const{attributes:a,name:i}=s;return a?.tagName&&"header"===a.tagName&&"core/template-part"===i||a?.slug&&a.slug.includes("header")&&"core/template-part"===i?(0,e.createElement)(e.Fragment,null,(0,e.createElement)(t,s),(0,e.createElement)(c.InspectorControls,null,(0,e.createElement)(o.Panel,null,(0,e.createElement)(o.PanelBody,{title:"Header Settings",initialOpen:!0},(0,e.createElement)(u,s))))):(0,e.createElement)(e.Fragment,null,(0,e.createElement)(t,s))}),"Header");(0,d.addFilter)("editor.BlockEdit","swt/header",p),(0,d.addFilter)("blocks.registerBlockType","swt/header-attributes",(function(e){return["core/template-part"].includes(e.name)&&e.attributes&&(e.attributes=Object.assign(e.attributes,{SWTStickyHeader:{type:"boolean",default:!1},SWTTransparentHeader:{type:"boolean",default:!1}})),e}));var m=window.React,w=()=>{const{activationUrl:t,pluginSlug:s,pluginStatus:a}=spectraOne;let i=[];"activated"!==a&&"installed"===a&&(i={initialText:"Activate Spectra",progressText:"Activating Spectra...",errorText:"Error activating Spectra",SuccessText:"Spectra Activated"}),"installed"!==a&&"activated"!==a&&(i={initialText:"Install & Activate Spectra",progressText:"Installing & Activating Spectra...",errorText:"Error installing Spectra",SuccessText:"Spectra Installed & Activated"});const{initialText:l,progressText:r,errorText:c,SuccessText:d}=i,[u,p]=(0,m.useState)(!1),[w,b]=(0,m.useState)(l),[g,h]=(0,m.useState)(!1),y=async e=>{!0===(await async function(e){try{if(200===(await fetch(e)).status)return{success:!0}}catch(e){return{success:!1}}}(e)).success?(p(!1),b(d),location.reload()):(b(c),p(!1),setTimeout((()=>{b(d),p(!1),h(!1)}),2e3))};return(0,e.createElement)(o.PanelBody,{title:(0,n.__)("Spectra plugin","spectra-one"),initialOpen:!0},(0,e.createElement)("p",null,(0,n.__)("Power-up your website with advanced and powerful blocks that help you build websites in no time!","spectra-one")),(0,e.createElement)(o.Button,{className:`swt-full-width-btn ${!0===u?"is-busy ":""} `,onClick:()=>(async(e,t)=>{if(!1===g)if(b(r),p(!0),h(!0),"activated"!==a&&"installed"===a)y(t);else try{await async function(e){return new Promise((t=>{wp.updates.ajax("install-plugin",{slug:e,success:()=>{t({success:!0})},error:e=>{t({success:!1,code:e.errorCode})}})}))}(e),y(t)}catch(e){"folder_exists"===e.errorCode&&y(t)}})(s,t),isPrimary:!0,"aria-disabled":g},w))};const b=t=>{const s=Object.entries(spectraOne.disable_sections).map((s=>{let[a,i]=s;const n=!(!t?.meta[i.key]||!t.meta[i.key]);return(0,e.createElement)(o.PanelRow,{key:a},(0,e.createElement)(o.ToggleControl,{key:a,label:i.label,checked:n,onChange:e=>{t.setMetaFieldValue(e,i.key)}}))}));return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(o.PanelBody,{title:(0,n.__)("Disable Elements","spectra-one"),initialOpen:!0,className:"swt-disable-elements-panel"},s),!t?.meta?.swt_meta_header_display&&(0,e.createElement)(o.PanelBody,{title:(0,n.__)("Header Settings","spectra-one"),initialOpen:!0,className:"swt-header-settings-panel"},(0,e.createElement)(u,r({},t,spectraOne.header_settings))),"activated"!==spectraOne.pluginStatus&&(0,e.createElement)(w,t))};var g=(0,a.compose)((0,i.withSelect)((e=>{const t=e("core/editor").getEditedPostAttribute("meta"),s=e("core/editor").getCurrentPostAttribute("meta");return{meta:{...s,...t},oldMeta:s}})),(0,i.withDispatch)((e=>({setMetaFieldValue:(t,s)=>e("core/editor").editPost({meta:{[s]:t}})}))))((t=>(0,e.createElement)(e.Fragment,null,(0,e.createElement)(s.PluginSidebarMoreMenuItem,{target:"swt-page-settings-panel",icon:l.logo},(0,n.__)("Spectra Page Settings","spectra-one")),(0,e.createElement)(s.PluginSidebar,{isPinnable:!0,icon:l.logo,name:"swt-page-settings-panel",title:(0,n.__)("Spectra Page Settings","spectra-one"),className:"swt-sidebar"},(0,e.createElement)(b,t)))));window.addEventListener("load",(function(){(0,i.subscribe)((function(){setTimeout((function(){const e=document.querySelector(".editor-styles-wrapper");null!==e&&(parseInt(e.offsetWidth)<1350?(e.classList.remove("swt-stacked-title-visibility"),e.classList.add("swt-stacked-title-visibility")):e.classList.remove("swt-stacked-title-visibility"));const t=document.querySelector(".title-visibility"),s=document.querySelector(".edit-post-visual-editor__post-title-wrapper");if(null===t&&null!==s){let e="";!1===(0,i.select)("core/editor").getEditedPostAttribute("meta").swt_meta_site_title_display?(e='<span class="dashicons dashicons-hidden title-visibility" data-tooltip="Enable Title"></span>',s.classList.toggle("invisible")):e='<span class="dashicons dashicons-visibility title-visibility" data-tooltip="Disable Title"></span>',s.insertAdjacentHTML("beforeend",e),document.querySelector(".title-visibility").addEventListener("click",(function(){s.classList.toggle("invisible"),this.classList.contains("dashicons-hidden")?(this.classList.add("dashicons-visibility"),this.classList.remove("dashicons-hidden"),this.dataset.tooltip="Disable Title",(0,i.dispatch)("core/editor").editPost({meta:{swt_meta_site_title_display:!0}})):(this.classList.add("dashicons-hidden"),this.classList.remove("dashicons-visibility"),this.dataset.tooltip="Enable Title",(0,i.dispatch)("core/editor").editPost({meta:{swt_meta_site_title_display:!1}}))}))}const a=document.querySelector(".editor-post-title__input"),n=document.querySelector(".title-visibility");null!==a&&null!==n&&(document.addEventListener("click",(function(e){s.contains(e.target)||(n.classList.remove("swt-show-visibility-icon"),a.classList.remove("swt-show-editor-title-outline"))})),document.addEventListener("visibilitychange",(function(){n.classList.remove("swt-show-visibility-icon"),a.classList.remove("swt-show-editor-title-outline")})),s.addEventListener("focusout",(function(){n.classList.remove("swt-show-visibility-icon"),a.classList.remove("swt-show-editor-title-outline")})),s.addEventListener("click",(function(){n.classList.add("swt-show-visibility-icon"),a.classList.add("swt-show-editor-title-outline")})),a.addEventListener("input",(function(){n.classList.add("swt-show-visibility-icon"),this.classList.add("swt-show-editor-title-outline")}))),document.querySelectorAll(".is-tablet-preview, .is-mobile-preview").length?document.body.classList.add("responsive-enabled"):document.body.classList.remove("responsive-enabled")}),1)}))}));const h=["core/archives","core/calendar","core/latest-comments","core/tag-cloud","core/rss"],y=(0,a.createHigherOrderComponent)((t=>s=>{const{attributes:a,name:i,setAttributes:l}=s,{SWTHideDesktop:r,SWTHideTab:d,SWTHideMob:u}=a;return i&&i.includes("core/")&&!h.includes(i)?(0,e.createElement)(e.Fragment,null,(0,e.createElement)(t,s),(0,e.createElement)(c.InspectorControls,null,(0,e.createElement)(o.Panel,null,(0,e.createElement)(o.PanelBody,{title:"Responsive Settings",initialOpen:!0},(0,e.createElement)(o.PanelRow,null,(0,e.createElement)(o.ToggleControl,{label:(0,n.__)("Hide Desktop","spectra-one"),checked:r,onChange:()=>l({SWTHideDesktop:!r})})),(0,e.createElement)(o.PanelRow,null,(0,e.createElement)(o.ToggleControl,{label:(0,n.__)("Hide Tablet","spectra-one"),checked:d,onChange:()=>l({SWTHideTab:!d})})),(0,e.createElement)(o.PanelRow,null,(0,e.createElement)(o.ToggleControl,{label:(0,n.__)("Hide Mobile","spectra-one"),checked:u,onChange:()=>l({SWTHideMob:!u})})))))):(0,e.createElement)(e.Fragment,null,(0,e.createElement)(t,s))}),"Responsive");(0,d.addFilter)("editor.BlockEdit","swt/responsive",y),(0,d.addFilter)("blocks.registerBlockType","swt/responsive-attributes",(function(e){const{name:t,attributes:s}=e;return t&&t.includes("core/")&&!h.includes(t)&&s&&(e.attributes=Object.assign(s,{SWTHideDesktop:{type:"boolean",default:!1},SWTHideTab:{type:"boolean",default:!1},SWTHideMob:{type:"boolean",default:!1}})),e}));const v=(0,a.createHigherOrderComponent)((t=>s=>{const{name:a,attributes:i}=s;if("core/latest-posts"!==a)return(0,e.createElement)(t,s);const{displayFeaturedImage:n}=i,l=n?"swt-has-featured-image":"";return(0,e.createElement)(t,r({},s,{className:l}))}),"latestPostList");(0,d.addFilter)("editor.BlockListBlock","swt/latest-post-list",v),spectraOne.is_spectra_plugin&&(0,d.addFilter)("spectra.page-sidebar.before","swt/setting-list",(function(t,s){return(0,e.createElement)(e.Fragment,null,t,(0,e.createElement)(b,s))}),10),spectraOne.is_spectra_plugin||(0,t.registerPlugin)("swt-page-level-settings",{render:g})}();