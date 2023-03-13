(()=>{var e={837:()=>{window.addEventListener("load",(function(e){wp.data.subscribe((function(){setTimeout((function(){const e=document.querySelector(".editor-styles-wrapper");null!==e&&(parseInt(e.offsetWidth)<1350?(e.classList.remove("swt-stacked-title-visibility"),e.classList.add("swt-stacked-title-visibility")):e.classList.remove("swt-stacked-title-visibility"));const t=document.querySelector(".title-visibility"),i=document.querySelector(".edit-post-visual-editor__post-title-wrapper");if(null===t&&null!==i){var s="";!1===wp.data.select("core/editor").getEditedPostAttribute("meta").swt_meta_site_title_display?(s='<span class="dashicons dashicons-hidden title-visibility" data-tooltip="Enable Title"></span>',i.classList.toggle("invisible")):s='<span class="dashicons dashicons-visibility title-visibility" data-tooltip="Disable Title"></span>',i.insertAdjacentHTML("beforeend",s),document.querySelector(".title-visibility").addEventListener("click",(function(){document.querySelector(".edit-post-visual-editor__post-title-wrapper").classList.toggle("invisible"),this.classList.contains("dashicons-hidden")?(this.classList.add("dashicons-visibility"),this.classList.remove("dashicons-hidden"),this.dataset.tooltip="Disable Title",wp.data.dispatch("core/editor").editPost({meta:{swt_meta_site_title_display:!0}})):(this.classList.add("dashicons-hidden"),this.classList.remove("dashicons-visibility"),this.dataset.tooltip="Enable Title",wp.data.dispatch("core/editor").editPost({meta:{swt_meta_site_title_display:!1}}))}))}const n=document.querySelector(".editor-post-title__input"),l=document.querySelector(".title-visibility");null!=n&&null!=l&&(document.addEventListener("click",(function(e){i.contains(e.target)||(l.classList.remove("swt-show-visibility-icon"),n.classList.remove("swt-show-editor-title-outline"))})),document.addEventListener("visibilitychange",(function(){l.classList.remove("swt-show-visibility-icon"),n.classList.remove("swt-show-editor-title-outline")})),i.addEventListener("focusout",(function(){l.classList.remove("swt-show-visibility-icon"),n.classList.remove("swt-show-editor-title-outline")})),i.addEventListener("click",(function(){l.classList.add("swt-show-visibility-icon"),n.classList.add("swt-show-editor-title-outline")})),n.addEventListener("input",(function(){l.classList.add("swt-show-visibility-icon"),this.classList.add("swt-show-editor-title-outline")}))),document.querySelectorAll(".is-tablet-preview, .is-mobile-preview").length?document.body.classList.add("responsive-enabled"):document.body.classList.remove("responsive-enabled")}),1)}))}))}},t={};function i(s){var n=t[s];if(void 0!==n)return n.exports;var l=t[s]={exports:{}};return e[s](l,l.exports,i),l.exports}(()=>{"use strict";const e=window.wp.element,t=window.wp.plugins,s=window.wp.editPost,n=window.wp.compose,l=window.wp.data,a=window.wp.i18n,o={logo:(0,e.createElement)("svg",{className:"swt-page-settings-button",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 70 70",fill:"none"}," ",(0,e.createElement)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M35 70C54.33 70 70 54.33 70 35C70 15.67 54.33 0 35 0C15.67 0 0 15.67 0 35C0 54.33 15.67 70 35 70ZM24.4471 23.5112C18.9722 26.7403 20.2852 35.3759 26.5032 37.0351L36.8875 39.806C37.7533 40.037 37.91 41.224 37.135 41.6811L27.0972 47.5799L26.036 58L45.5529 46.4888C51.0278 43.2597 49.7148 34.6241 43.4968 32.9649L33.1125 30.1941C32.2467 29.963 32.09 28.776 32.865 28.3189L42.9028 22.4202L43.964 12L24.4471 23.5112Z"})," ")},r=window.wp.components,c=t=>{const i=Object.entries(spectra.disable_sections).map((i=>{let[s,n]=i,l=!(!t.meta[n.key]||!0!==t.meta[n.key]);return(0,e.createElement)(r.ToggleControl,{key:s,label:n.label,checked:l,onChange:e=>{t.setMetaFieldValue(e,n.key)}})}));return(0,e.createElement)(r.PanelBody,{title:(0,a.__)("Disable Elements"),initialOpen:!0,className:"swt-disable-elements-panel"},i)},d=(0,n.compose)((0,l.withSelect)((e=>{const t=e("core/editor").getEditedPostAttribute("meta"),i=e("core/editor").getCurrentPostAttribute("meta");return{meta:{...i,...t},oldMeta:i}})),(0,l.withDispatch)((e=>({setMetaFieldValue:(t,i)=>e("core/editor").editPost({meta:{[i]:t}})}))))((t=>(0,e.createElement)(e.Fragment,null,(0,e.createElement)(s.PluginSidebarMoreMenuItem,{target:"swt-page-settings-panel",icon:o.logo},(0,a.__)("Page Settings")),(0,e.createElement)(s.PluginSidebar,{isPinnable:!0,icon:o.logo,name:"swt-page-settings-panel",title:(0,a.__)("Page Settings"),className:"swt-sidebar"},(0,e.createElement)(c,t))))),p=window.wp.hooks;i(837);const u=window.wp.blockEditor,m=(0,n.createHigherOrderComponent)((t=>i=>{const{attributes:s,name:n,setAttributes:l}=i,{SWTStickyHeader:o,SWTTransparentHeader:c}=s;return"header"===s.slug&&"core/template-part"===n?(0,e.createElement)(e.Fragment,null,(0,e.createElement)(t,i),(0,e.createElement)(u.InspectorControls,null,(0,e.createElement)(r.Panel,null,(0,e.createElement)(r.PanelBody,{title:"Header Settings",initialOpen:!0},!c&&(0,e.createElement)(r.PanelRow,null,(0,e.createElement)(r.ToggleControl,{label:(0,a.__)("Enable Sticky Header","spectra"),help:o?(0,a.__)("Transparent header option will be disabled on enabling this option.","spectra"):"",checked:o,onChange:()=>l({SWTStickyHeader:!o})})),!o&&(0,e.createElement)(r.PanelRow,null,(0,e.createElement)(r.ToggleControl,{label:(0,a.__)("Enable Transparent Header","spectra"),help:c?(0,a.__)("Sticky header option will be disabled on enabling this option.","spectra"):"",checked:c,onChange:()=>l({SWTTransparentHeader:!c})})))))):(0,e.createElement)(e.Fragment,null,(0,e.createElement)(t,i))}),"Header");(0,p.addFilter)("editor.BlockEdit","swt/header",m),(0,p.addFilter)("blocks.registerBlockType","swt/header-attributes",(function(e){return["core/template-part"].includes(e.name)&&e.attributes&&(e.attributes=Object.assign(e.attributes,{SWTStickyHeader:{type:"boolean",default:!1},SWTTransparentHeader:{type:"boolean",default:!1}})),e}));const b=(0,n.createHigherOrderComponent)((t=>i=>{const{attributes:s,name:n,setAttributes:l}=i,{UAGHideDesktop:o,UAGHideTab:c,UAGHideMob:d}=s;return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(t,i),(0,e.createElement)(u.InspectorControls,null,(0,e.createElement)(r.Panel,null,(0,e.createElement)(r.PanelBody,{title:"Responsive Settings",initialOpen:!0},(0,e.createElement)(r.PanelRow,null,(0,e.createElement)(r.ToggleControl,{label:(0,a.__)("Hide Desktop","spectra"),checked:o,onChange:()=>l({UAGHideDesktop:!o})})),(0,e.createElement)(r.PanelRow,null,(0,e.createElement)(r.ToggleControl,{label:(0,a.__)("Hide Tablet","spectra"),checked:c,onChange:()=>l({UAGHideTab:!c})})),(0,e.createElement)(r.PanelRow,null,(0,e.createElement)(r.ToggleControl,{label:(0,a.__)("Hide Mobile","spectra"),checked:d,onChange:()=>l({UAGHideMob:!d})}))))))}),"Responsive");spectra.is_spectra_plugin||(0,p.addFilter)("editor.BlockEdit","swt/responsive",b),spectra.is_spectra_plugin||(0,p.addFilter)("blocks.registerBlockType","swt/responsive-attributes",(function(e){return e.attributes&&(e.attributes=Object.assign(e.attributes,{UAGHideDesktop:{type:"boolean",default:!1},UAGHideTab:{type:"boolean",default:!1},UAGHideMob:{type:"boolean",default:!1}})),e})),spectra.is_spectra_plugin&&(0,p.addFilter)("spectra.page-sidebar.before","swt/setting-list",(function(t,i){return(0,e.createElement)(c,i)})),spectra.is_spectra_plugin||(0,t.registerPlugin)("swt-page-level-settings",{render:d})})()})();