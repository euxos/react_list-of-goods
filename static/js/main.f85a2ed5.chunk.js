(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var o=n(0),s=n.n(o),a=n(3),r=n.n(a),i=(n(13),n(1)),c=n(4),l=n(5),u=n(7),g=n(6),d=function(t){var e=t.goodsList;return s.a.createElement(s.a.Fragment,null,e.map((function(t){return s.a.createElement("li",{className:"goods-list__item",key:t},t)})))},m=(n(14),function(t){Object(u.a)(n,t);var e=Object(g.a)(n);function n(){var t;Object(c.a)(this,n);for(var o=arguments.length,s=new Array(o),a=0;a<o;a++)s[a]=arguments[a];return(t=e.call.apply(e,[this].concat(s))).goodsLength=1,t.state={hideList:!0,goodsList:Object(i.a)(t.props.goodsList)},t.showList=function(){t.setState({hideList:!1})},t.reverseList=function(){t.setState((function(t){var e=t.goodsList;return{goodsList:Object(i.a)(e).reverse()}}))},t.sortAlphabet=function(){t.setState((function(t){var e=t.goodsList;return{goodsList:Object(i.a)(e).sort((function(t,e){return t.localeCompare(e)}))}}))},t.resetList=function(){t.setState({goodsList:t.props.goodsList.filter((function(e){return e.length>=t.goodsLength}))})},t.sortByLength=function(){t.setState((function(t){var e=t.goodsList;return{goodsList:Object(i.a)(e).sort((function(t,e){return t.length-e.length}))}}))},t.selectByLength=function(e){t.goodsLength=e,t.resetList()},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this,e=this.state,n=e.goodsList,o=e.hideList;return s.a.createElement("div",{className:"goods-list"},o&&s.a.createElement("button",{className:"goods-list__button",type:"button",onClick:this.showList},"Start"),!o&&s.a.createElement(s.a.Fragment,null,s.a.createElement("ul",{className:"goods-list__items"},s.a.createElement(d,{goodsList:n})),s.a.createElement("div",{className:"goods-list__button-wrap"},s.a.createElement("button",{className:"goods-list__button",type:"button",onClick:this.reverseList},"Reverse"),s.a.createElement("button",{className:"goods-list__button",type:"button",onClick:this.sortAlphabet},"Sort alphabetically"),s.a.createElement("button",{className:"goods-list__button",type:"button",onClick:this.resetList},"Reset"),s.a.createElement("button",{className:"goods-list__button",type:"button",onClick:this.sortByLength},"Sort by length"),s.a.createElement("select",{defaultValue:this.goodsLength,onChange:function(e){return t.selectByLength(e.target.value)}},Array(10).fill("").map((function(t,e){return s.a.createElement("option",{value:e+1},e+1)}))))))}}]),n}(s.a.Component)),h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],L=function(){return s.a.createElement(m,{goodsList:h})};r.a.render(s.a.createElement(L,null),document.getElementById("root"))},8:function(t,e,n){t.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.f85a2ed5.chunk.js.map