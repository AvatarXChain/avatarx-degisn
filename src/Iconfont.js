import { css } from 'styled-components'

const iconURL = 'https://at.alicdn.com/t/font_148784_v4ggb6wrjmkotj4i'
const iconPrefix = 'icon'

const iconFont = css`
  display: inline-block;
  font-style: normal;
  vertical-align: baseline;
  text-align: center;
  text-transform: none;
  line-height: 1;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`
const fontsCSS = css`
  @font-face {
    font-family: 'anticon';
    font-display: fallback;
    src: url('${iconURL}.eot');
    src:
      url('${iconURL}.woff') format('woff'),
      url('${iconURL}.ttf') format('truetype'),
      url('${iconURL}.svg#iconfont') format('svg');
  }

  .icon {
    ${iconFont};

    &:before {
      display: block;
      font-family: "anticon" !important;
    }
  }

  .${iconPrefix}-step-forward:before { content: "\e600"; }
  .${iconPrefix}-step-backward:before { content: "\e601"; }
  .${iconPrefix}-forward:before { content: "\e602"; }
  .${iconPrefix}-backward:before { content: "\e603"; }
  .${iconPrefix}-caret-right:before { content: "\e604"; }
  .${iconPrefix}-caret-left:before { content: "\e605"; }
  .${iconPrefix}-caret-down:before { content: "\e606"; }
  .${iconPrefix}-caret-up:before { content: "\e607"; }
  .${iconPrefix}-right-circle:before { content: "\e608"; }
  .${iconPrefix}-circle-right:before { content: "\e608"; } // antd@1.x compatibility alias: right-circle
  .${iconPrefix}-caret-circle-right:before { content: "\e608"; } // antd@1.x compatibility alias: right-circle
  .${iconPrefix}-left-circle:before { content: "\e609"; }
  .${iconPrefix}-circle-left:before { content: "\e609"; } // antd@1.x compatibility alias: left-circle
  .${iconPrefix}-caret-circle-left:before { content: "\e609"; } // antd@1.x compatibility alias: left-circle
  .${iconPrefix}-up-circle:before { content: "\e60a"; }
  .${iconPrefix}-circle-up:before { content: "\e60a"; } // antd@1.x compatibility alias: up-circle
  .${iconPrefix}-caret-circle-up:before { content: "\e60a"; } // antd@1.x compatibility alias: up-circle
  .${iconPrefix}-down-circle:before { content: "\e60b"; }
  .${iconPrefix}-circle-down:before { content: "\e60b"; } // antd@1.x compatibility alias: down-circle
  .${iconPrefix}-caret-circle-down:before { content: "\e60b"; } // antd@1.x compatibility alias: down-circle
  .${iconPrefix}-right-circle-o:before { content: "\e60c"; }
  .${iconPrefix}-circle-o-right:before { content: "\e60c"; } // antd@1.x compatibility alias: right-circle-o
  .${iconPrefix}-caret-circle-o-right:before { content: "\e60c"; } // antd@1.x compatibility alias: right-circle-o
  .${iconPrefix}-left-circle-o:before { content: "\e60d"; }
  .${iconPrefix}-circle-o-left:before { content: "\e60d"; } // antd@1.x compatibility alias: left-circle-o
  .${iconPrefix}-caret-circle-o-left:before { content: "\e60d"; } // antd@1.x compatibility alias: left-circle-o
  .${iconPrefix}-up-circle-o:before { content: "\e60e"; }
  .${iconPrefix}-circle-o-up:before { content: "\e60e"; } // antd@1.x compatibility alias: up-circle-o
  .${iconPrefix}-caret-circle-o-up:before { content: "\e60e"; } // antd@1.x compatibility alias: up-circle-o
  .${iconPrefix}-down-circle-o:before { content: "\e60f"; }
  .${iconPrefix}-circle-o-down:before { content: "\e60f"; } // antd@1.x compatibility alias: down-circle-o
  .${iconPrefix}-caret-circle-o-down:before { content: "\e60f"; } // antd@1.x compatibility alias: down-circle-o
  .${iconPrefix}-verticle-left:before { content: "\e610"; }
  .${iconPrefix}-verticle-right:before { content: "\e611"; }
  .${iconPrefix}-rollback:before { content: "\e612"; }
  .${iconPrefix}-retweet:before { content: "\e613"; }
  .${iconPrefix}-shrink:before { content: "\e614"; }
  .${iconPrefix}-arrows-alt:before { content: "\e615"; }
  .${iconPrefix}-arrow-salt:before { content: "\e615"; } // antd@1.x compatibility alias: arrows-alt
  .${iconPrefix}-reload:before { content: "\e616"; }
  .${iconPrefix}-double-right:before { content: "\e617"; }
  .${iconPrefix}-double-left:before { content: "\e618"; }
  .${iconPrefix}-arrow-down:before { content: "\e619"; }
  .${iconPrefix}-arrow-up:before { content: "\e61a"; }
  .${iconPrefix}-arrow-right:before { content: "\e61b"; }
  .${iconPrefix}-arrow-left:before { content: "\e61c"; }
  .${iconPrefix}-down:before { content: "\e61d"; }
  .${iconPrefix}-up:before { content: "\e61e"; }
  .${iconPrefix}-right:before { content: "\e61f"; }
  .${iconPrefix}-left:before { content: "\e620"; }
  .${iconPrefix}-minus-square-o:before { content: "\e621"; }
  .${iconPrefix}-minus-circle:before { content: "\e622"; }
  .${iconPrefix}-minus-circle-o:before { content: "\e623"; }
  .${iconPrefix}-minus:before { content: "\e624"; }
  .${iconPrefix}-plus-circle-o:before { content: "\e625"; }
  .${iconPrefix}-plus-circle:before { content: "\e626"; }
  .${iconPrefix}-plus:before { content: "\e627"; }
  .${iconPrefix}-info-circle:before { content: "\e628"; }
  .${iconPrefix}-info-circle-o:before { content: "\e629"; }
  .${iconPrefix}-info:before { content: "\e62a"; }
  .${iconPrefix}-exclamation:before { content: "\e62b"; }
  .${iconPrefix}-exclamation-circle:before { content: "\e62c"; }
  .${iconPrefix}-exclamation-circle-o:before { content: "\e62d"; }
  .${iconPrefix}-close-circle:before { content: "\e62e"; }
  .${iconPrefix}-cross-circle:before { content: "\e62e"; } // antd@1.x compatibility alias: close-circle
  .${iconPrefix}-close-circle-o:before { content: "\e62f"; }
  .${iconPrefix}-cross-circle-o:before { content: "\e62f"; } // antd@1.x compatibility alias: close-circle-o
  .${iconPrefix}-check-circle:before { content: "\e630"; }
  .${iconPrefix}-check-circle-o:before { content: "\e631"; }
  .${iconPrefix}-check:before { content: "\e632"; }
  .${iconPrefix}-close:before { content: "\e633"; }
  .${iconPrefix}-cross:before { content: "\e633"; } // antd@1.x compatibility alias: close
  .${iconPrefix}-customer-service:before { content: "\e634"; }
  .${iconPrefix}-customerservice:before { content: "\e634"; } // antd@1.x compatibility alias: customer-service
  .${iconPrefix}-credit-card:before { content: "\e635"; }
  .${iconPrefix}-code-o:before { content: "\e636"; }
  .${iconPrefix}-book:before { content: "\e637"; }
  .${iconPrefix}-bars:before { content: "\e639"; }
  .${iconPrefix}-question:before { content: "\e63a"; }
  .${iconPrefix}-question-circle:before { content: "\e63b"; }
  .${iconPrefix}-question-circle-o:before { content: "\e63c"; }
  .${iconPrefix}-pause:before { content: "\e63d"; }
  .${iconPrefix}-pause-circle:before { content: "\e63e"; }
  .${iconPrefix}-pause-circle-o:before { content: "\e63f"; }
  .${iconPrefix}-clock-circle:before { content: "\e640"; }
  .${iconPrefix}-clock-circle-o:before { content: "\e641"; }
  .${iconPrefix}-swap:before { content: "\e642"; }
  .${iconPrefix}-swap-left:before { content: "\e643"; }
  .${iconPrefix}-swap-right:before { content: "\e644"; }
  .${iconPrefix}-plus-square-o:before { content: "\e645"; }
  .${iconPrefix}-frown:before { content: "\e646"; }
  .${iconPrefix}-frown-circle:before { content: "\e646"; } // antd@1.x compatibility alias: frown
  .${iconPrefix}-ellipsis:before { content: "\e647"; }
  .${iconPrefix}-copy:before { content: "\e648"; }
  .${iconPrefix}-menu-fold:before { content: "\e9ac"; }
  .${iconPrefix}-mail:before { content: "\e659"; }
  .${iconPrefix}-logout:before { content: "\e65a"; }
  .${iconPrefix}-link:before { content: "\e65b"; }
  .${iconPrefix}-area-chart:before { content: "\e65c"; }
  .${iconPrefix}-line-chart:before { content: "\e65d"; }
  .${iconPrefix}-home:before { content: "\e65e"; }
  .${iconPrefix}-laptop:before { content: "\e65f"; }
  .${iconPrefix}-star:before { content: "\e660"; }
  .${iconPrefix}-star-o:before { content: "\e661"; }
  .${iconPrefix}-folder:before { content: "\e662"; }
  .${iconPrefix}-filter:before { content: "\e663"; }
  .${iconPrefix}-file:before { content: "\e664"; }
  .${iconPrefix}-exception:before { content: "\e665"; }
  .${iconPrefix}-meh:before { content: "\e666"; }
  .${iconPrefix}-meh-circle:before { content: "\e666"; } // antd@1.x compatibility alias: meh
  .${iconPrefix}-meh-o:before { content: "\e667"; }
  .${iconPrefix}-shopping-cart:before { content: "\e668"; }
  .${iconPrefix}-save:before { content: "\e669"; }
  .${iconPrefix}-user:before { content: "\e66a"; }
  .${iconPrefix}-video-camera:before { content: "\e66b"; }
  .${iconPrefix}-to-top:before { content: "\e66c"; }
  .${iconPrefix}-team:before { content: "\e66d"; }
  .${iconPrefix}-tablet:before { content: "\e66e"; }
  .${iconPrefix}-solution:before { content: "\e66f"; }
  .${iconPrefix}-search:before { content: "\e670"; }
  .${iconPrefix}-share-alt:before { content: "\e671"; }
  .${iconPrefix}-setting:before { content: "\e672"; }
  .${iconPrefix}-poweroff:before { content: "\e6d5"; }
  .${iconPrefix}-picture:before { content: "\e674"; }
  .${iconPrefix}-phone:before { content: "\e675"; }
  .${iconPrefix}-paper-clip:before { content: "\e676"; }
  .${iconPrefix}-notification:before { content: "\e677"; }
  .${iconPrefix}-mobile:before { content: "\e678"; }
  .${iconPrefix}-menu-unfold:before { content: "\e9ad"; }
  .${iconPrefix}-inbox:before { content: "\e67a"; }
  .${iconPrefix}-lock:before { content: "\e67b"; }
  .${iconPrefix}-qrcode:before { content: "\e67c"; }
  .${iconPrefix}-play-circle:before { content: "\e6d0"; }
  .${iconPrefix}-play-circle-o:before { content: "\e6d1"; }
  .${iconPrefix}-tag:before { content: "\e6d2"; }
  .${iconPrefix}-tag-o:before { content: "\e6d3"; }
  .${iconPrefix}-tags:before { content: "\e67d"; }
  .${iconPrefix}-tags-o:before { content: "\e67e"; }
  .${iconPrefix}-cloud-o:before { content: "\e67f"; }
  .${iconPrefix}-cloud:before { content: "\e680"; }
  .${iconPrefix}-cloud-upload:before { content: "\e681"; }
  .${iconPrefix}-cloud-download:before { content: "\e682"; }
  .${iconPrefix}-cloud-download-o:before { content: "\e683"; }
  .${iconPrefix}-cloud-upload-o:before { content: "\e684"; }
  .${iconPrefix}-environment:before { content: "\e685"; }
  .${iconPrefix}-environment-o:before { content: "\e686"; }
  .${iconPrefix}-eye:before { content: "\e687"; }
  .${iconPrefix}-eye-o:before { content: "\e688"; }
  .${iconPrefix}-camera:before { content: "\e689"; }
  .${iconPrefix}-camera-o:before { content: "\e68a"; }
  .${iconPrefix}-windows:before { content: "\e68b"; }
  .${iconPrefix}-apple:before { content: "\e68c"; }
  .${iconPrefix}-apple-o:before { content: "\e6d4"; }
  .${iconPrefix}-android:before { content: "\e938"; }
  .${iconPrefix}-android-o:before { content: "\e68d"; }
  .${iconPrefix}-aliwangwang:before { content: "\e68e"; }
  .${iconPrefix}-aliwangwang-o:before { content: "\e68f"; }
  .${iconPrefix}-export:before { content: "\e691"; }
  .${iconPrefix}-edit:before { content: "\e692"; }
  .${iconPrefix}-appstore-o:before { content: "\e695"; }
  .${iconPrefix}-appstore:before { content: "\e696"; }
  .${iconPrefix}-scan:before { content: "\e697"; }
  .${iconPrefix}-file-text:before { content: "\e698"; }
  .${iconPrefix}-folder-open:before { content: "\e699"; }
  .${iconPrefix}-hdd:before { content: "\e69a"; }
  .${iconPrefix}-ie:before { content: "\e69b"; }
  .${iconPrefix}-file-jpg:before { content: "\e69c"; }
  .${iconPrefix}-like:before { content: "\e64c"; }
  .${iconPrefix}-like-o:before { content: "\e69d"; }
  .${iconPrefix}-dislike:before { content: "\e64b"; }
  .${iconPrefix}-dislike-o:before { content: "\e69e"; }
  .${iconPrefix}-delete:before { content: "\e69f"; }
  .${iconPrefix}-enter:before { content: "\e6a0"; }
  .${iconPrefix}-pushpin-o:before { content: "\e6a1"; }
  .${iconPrefix}-pushpin:before { content: "\e6a2"; }
  .${iconPrefix}-heart:before { content: "\e6a3"; }
  .${iconPrefix}-heart-o:before { content: "\e6a4"; }
  .${iconPrefix}-pay-circle:before { content: "\e6a5"; }
  .${iconPrefix}-pay-circle-o:before { content: "\e6a6"; }
  .${iconPrefix}-smile:before { content: "\e6a7"; }
  .${iconPrefix}-smile-circle:before { content: "\e6a7"; }  // antd@1.x compatibility alias: smile
  .${iconPrefix}-smile-o:before { content: "\e6a8"; }
  .${iconPrefix}-frown-o:before { content: "\e6a9"; }
  .${iconPrefix}-calculator:before { content: "\e6aa"; }
  .${iconPrefix}-message:before { content: "\e6ab"; }
  .${iconPrefix}-chrome:before { content: "\e6ac"; }
  .${iconPrefix}-github:before { content: "\e6ad"; }
  .${iconPrefix}-file-unknown:before { content: "\e6af"; }
  .${iconPrefix}-file-excel:before { content: "\e6b0"; }
  .${iconPrefix}-file-ppt:before { content: "\e6b1"; }
  .${iconPrefix}-file-word:before { content: "\e6b2"; }
  .${iconPrefix}-file-pdf:before { content: "\e6b3"; }
  .${iconPrefix}-desktop:before { content: "\e6b4"; }
  .${iconPrefix}-upload:before { content: "\e6b6"; }
  .${iconPrefix}-download:before { content: "\e6b7"; }
  .${iconPrefix}-pie-chart:before { content: "\e6b8"; }
  .${iconPrefix}-unlock:before { content: "\e6ba"; }
  .${iconPrefix}-calendar:before { content: "\e6bb"; }
  .${iconPrefix}-windows-o:before { content: "\e6bc"; }
  .${iconPrefix}-dot-chart:before { content: "\e6bd"; }
  .${iconPrefix}-bar-chart:before { content: "\e6be"; }
  .${iconPrefix}-code:before { content: "\e6bf"; }
  .${iconPrefix}-api:before { content: "\e951"; }
  .${iconPrefix}-plus-square:before { content: "\e6c0"; }
  .${iconPrefix}-minus-square:before { content: "\e6c1"; }
  .${iconPrefix}-close-square:before { content: "\e6c2"; }
  .${iconPrefix}-close-square-o:before { content: "\e6c3"; }
  .${iconPrefix}-check-square:before { content: "\e6c4"; }
  .${iconPrefix}-check-square-o:before { content: "\e6c5"; }
  .${iconPrefix}-fast-backward:before { content: "\e6c6"; }
  .${iconPrefix}-fast-forward:before { content: "\e6c7"; }
  .${iconPrefix}-up-square:before { content: "\e6c8"; }
  .${iconPrefix}-down-square:before { content: "\e6c9"; }
  .${iconPrefix}-left-square:before { content: "\e6ca"; }
  .${iconPrefix}-right-square:before { content: "\e6cb"; }
  .${iconPrefix}-right-square-o:before { content: "\e6cc"; }
  .${iconPrefix}-left-square-o:before { content: "\e6cd"; }
  .${iconPrefix}-down-square-o:before { content: "\e6ce"; }
  .${iconPrefix}-up-square-o:before { content: "\e6cf"; }
  .${iconPrefix}-loading:before { content: "\e64d"; }
  .${iconPrefix}-loading-3-quarters:before { content: "\e6ae"; }
  .${iconPrefix}-bulb:before { content: "\e649"; }
  .${iconPrefix}-select:before { content: "\e64a"; }
  .${iconPrefix}-addfile:before,
  .${iconPrefix}-file-add:before { content: "\e910"; }
  .${iconPrefix}-addfolder:before,
  .${iconPrefix}-folder-add:before { content: "\e914"; }
  .${iconPrefix}-switcher:before { content: "\e913"; }
  .${iconPrefix}-rocket:before { content: "\e90f"; }
  .${iconPrefix}-dingding:before { content: "\e923"; }
  .${iconPrefix}-dingding-o:before { content: "\e925"; }
  .${iconPrefix}-bell:before { content: "\e64e"; }
  .${iconPrefix}-disconnect:before { content: "\e64f"; }
  .${iconPrefix}-database:before { content: "\e650"; }
  .${iconPrefix}-compass:before { content: "\e6db"; }
  .${iconPrefix}-barcode:before { content: "\e652"; }
  .${iconPrefix}-hourglass:before { content: "\e653"; }
  .${iconPrefix}-key:before { content: "\e654"; }
  .${iconPrefix}-flag:before { content: "\e655"; }
  .${iconPrefix}-layout:before { content: "\e656"; }
  .${iconPrefix}-login:before { content: "\e657"; }
  .${iconPrefix}-printer:before { content: "\e673"; }
  .${iconPrefix}-sound:before { content: "\e6e9"; }
  .${iconPrefix}-usb:before { content: "\e6d7"; }
  .${iconPrefix}-skin:before { content: "\e6d8"; }
  .${iconPrefix}-tool:before { content: "\e6d9"; }
  .${iconPrefix}-sync:before { content: "\e6da"; }
  .${iconPrefix}-wifi:before { content: "\e6d6"; }
  .${iconPrefix}-car:before { content: "\e6dc"; }
  .${iconPrefix}-copyright:before { content: "\e6de"; }
  .${iconPrefix}-schedule:before { content: "\e6df"; }
  .${iconPrefix}-user-add:before { content: "\e6ed"; }
  .${iconPrefix}-user-delete:before { content: "\e6e0"; }
  .${iconPrefix}-usergroup-add:before { content: "\e6dd"; }
  .${iconPrefix}-usergroup-delete:before { content: "\e6e1"; }
  .${iconPrefix}-man:before { content: "\e6e2"; }
  .${iconPrefix}-woman:before { content: "\e6ec"; }
  .${iconPrefix}-shop:before { content: "\e6e3"; }
  .${iconPrefix}-gift:before { content: "\e6e4"; }
  .${iconPrefix}-idcard:before { content: "\e6e5"; }
  .${iconPrefix}-medicine-box:before { content: "\e6e6"; }
  .${iconPrefix}-red-envelope:before { content: "\e6e7"; }
  .${iconPrefix}-coffee:before { content: "\e6e8"; }
  .${iconPrefix}-trademark:before { content: "\e651"; }
  .${iconPrefix}-safety:before { content: "\e6ea"; }
  .${iconPrefix}-wallet:before { content: "\e6eb"; }
  .${iconPrefix}-bank:before { content: "\e6ee"; }
  .${iconPrefix}-trophy:before { content: "\e6ef"; }
  .${iconPrefix}-contacts:before { content: "\e6f0"; }
  .${iconPrefix}-global:before { content: "\e6f1"; }
  .${iconPrefix}-shake:before { content: "\e94f"; }
  .${iconPrefix}-fork:before { content: "\e6f2"; }
  .${iconPrefix}-dashboard:before { content: "\e99a"; }
  .${iconPrefix}-profile:before { content: "\e999"; }
  .${iconPrefix}-table:before { content: "\e998"; }
  .${iconPrefix}-warning:before { content: "\e997"; }
  .${iconPrefix}-form:before { content: "\e996"; }
  .${iconPrefix}-spin:before {
    display: inline-block;
    animation: loadingCircle 1s infinite linear;
  }
  .${iconPrefix}-weibo-square:before { content: "\e6f5"; }
  .${iconPrefix}-weibo-circle:before { content: "\e6f4"; }
  .${iconPrefix}-taobao-circle:before { content: "\e6f3"; }
  .${iconPrefix}-html5:before { content: "\e9c7"; }
  .${iconPrefix}-weibo:before { content: "\e9c6"; }
  .${iconPrefix}-twitter:before { content: "\e9c5"; }
  .${iconPrefix}-wechat:before { content: "\e9c4"; }
  .${iconPrefix}-youtube:before { content: "\e9c3"; }
  .${iconPrefix}-alipay-circle:before { content: "\e9c2"; }
  .${iconPrefix}-taobao:before { content: "\e9c1"; }
  .${iconPrefix}-skype:before { content: "\e9c0"; }
  .${iconPrefix}-qq:before { content: "\e9bf"; }
  .${iconPrefix}-medium-workmark:before { content: "\e9be"; }
  .${iconPrefix}-gitlab:before { content: "\e9bd"; }
  .${iconPrefix}-medium:before { content: "\e9bc"; }
  .${iconPrefix}-linkedin:before { content: "\e9bb"; }
  .${iconPrefix}-google-plus:before { content: "\e9ba"; }
  .${iconPrefix}-dropbox:before { content: "\e9b9"; }
  .${iconPrefix}-facebook:before { content: "\e9b8"; }
  .${iconPrefix}-codepen:before { content: "\e9b7"; }
  .${iconPrefix}-amazon:before { content: "\e9b6"; }
  .${iconPrefix}-google:before { content: "\e9b5"; }
  .${iconPrefix}-codepen-circle:before { content: "\e9b4"; }
  .${iconPrefix}-alipay:before { content: "\e9b3"; }
  .${iconPrefix}-ant-design:before { content: "\e9b2"; }
  .${iconPrefix}-aliyun:before { content: "\e9f4"; }
  .${iconPrefix}-zhihu:before { content: "\e703"; }
  .${iconPrefix}-file-markdown:before { content: "\e704"; }
  .${iconPrefix}-slack:before { content: "\e705"; }
  .${iconPrefix}-slack-square:before { content: "\e706"; }
  .${iconPrefix}-behance:before { content: "\e707"; }
  .${iconPrefix}-behance-square:before { content: "\e708"; }
  .${iconPrefix}-dribbble:before { content: "\e709"; }
  .${iconPrefix}-dribbble-square:before { content: "\e70a"; }
  .${iconPrefix}-instagram:before { content: "\e70b"; }
  .${iconPrefix}-yuque:before { content: "\e70c"; }
`

export default fontsCSS
