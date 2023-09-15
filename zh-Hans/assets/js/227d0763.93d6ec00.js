"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[44160],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=r.createContext({}),c=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(d.Provider,{value:t},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=c(n),m=o,f=l["".concat(d,".").concat(m)]||l[m]||u[m]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[l]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},25550:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={},i=void 0,s={unversionedId:"codestack/solidworks-document-manager-api/document/data-storage/third-party/add-comments/index",id:"codestack/solidworks-document-manager-api/document/data-storage/third-party/add-comments/index",title:"index",description:"public override void SetLength(long value)",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-document-manager-api/document/data-storage/third-party/add-comments/index.md",sourceDirName:"codestack/solidworks-document-manager-api/document/data-storage/third-party/add-comments",slug:"/codestack/solidworks-document-manager-api/document/data-storage/third-party/add-comments/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-document-manager-api/document/data-storage/third-party/add-comments/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-document-manager-api/document/data-storage/third-party/add-comments/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528SOLIDWORKS Document Manager API\u5c06\u6570\u636e\u4fdd\u5b58\u5230\u7b2c\u4e09\u65b9\u5b58\u50a8",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-document-manager-api/document/data-storage/third-party/"},next:{title:"\u4f7f\u7528SOLIDWORKS\u6587\u6863\u7ba1\u7406\u5668API\u5c06\u6c34\u5370\u6dfb\u52a0\u5230\u6a21\u578b\u7684\u7b2c\u4e09\u65b9\u5b58\u50a8",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-document-manager-api/document/data-storage/third-party/add-watermark/"}},d={},c=[],p={toc:c},l="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(l,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'public override void SetLength(long value)\n{\nthrow new NotSupportedException("SetLength is not supported");\n}'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'    public unsafe override void Write(byte[] buffer, int offset, int count)\n    {\n        if (!m_IsWritable)\n        {\n            throw new NotSupportedException("Stream is not writable");\n        }\n\n        if (offset != 0)\n        {\n            throw new NotSupportedException("Offset is not supported");\n        }\n\n        int bytesWritten;\n\n        var address = new IntPtr(&bytesWritten);\n\n        m_ComStream.Write(buffer, count, address);\n    }\n\n    protected override void Dispose(bool disposing)\n    {\n        if (disposing)\n        {\n            if (m_ComStream != null)\n            {\n                Marshal.ReleaseComObject(m_ComStream);\n            }\n        }\n\n        base.Dispose(disposing);\n    }\n}\n')),(0,o.kt)("p",null,"}"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'\n```csharp\npublic override void SetLength(long value)\n{\n    m_ComStream.SetSize(value);\n}\n\npublic override void Write(byte[] buffer, int offset, int count)\n{\n    if (offset != 0)\n    {\n        throw new NotSupportedException("\u4e0d\u652f\u6301\u504f\u79fb\u91cf");\n    }\n\n    m_ComStream.Write(buffer, count, IntPtr.Zero);\n}\n\nprotected override void Dispose(bool disposing)\n{\n    try\n    {\n        if (disposing)\n        {\n            m_IsWritable = false;\n        }\n    }\n    finally\n    {\n        base.Dispose(disposing);\n    }\n}\n\n~ComStream()\n{\n    Dispose(false);\n}\n}\n```\n')))}u.isMDXComponent=!0}}]);