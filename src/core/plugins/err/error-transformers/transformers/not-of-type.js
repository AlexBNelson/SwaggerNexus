function cov_5ke7tx3h5(){var path="C:\\Users\\User\\source\\repos\\multi-swagger\\Multi-Swagger\\src\\core\\plugins\\err\\error-transformers\\transformers\\not-of-type.js";var hash="0b5ca6f3f41d250794e7e9d4b58cff49ad750a68";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"C:\\Users\\User\\source\\repos\\multi-swagger\\Multi-Swagger\\src\\core\\plugins\\err\\error-transformers\\transformers\\not-of-type.js",statementMap:{"0":{start:{line:4,column:2},end:{line:14,column:6}},"1":{start:{line:6,column:20},end:{line:6,column:41}},"2":{start:{line:7,column:14},end:{line:7,column:49}},"3":{start:{line:8,column:6},end:{line:13,column:7}},"4":{start:{line:9,column:20},end:{line:9,column:75}},"5":{start:{line:10,column:8},end:{line:10,column:89}},"6":{start:{line:12,column:8},end:{line:12,column:18}},"7":{start:{line:18,column:2},end:{line:28,column:19}},"8":{start:{line:19,column:4},end:{line:27,column:5}},"9":{start:{line:20,column:6},end:{line:20,column:26}},"10":{start:{line:21,column:11},end:{line:27,column:5}},"11":{start:{line:22,column:6},end:{line:22,column:25}},"12":{start:{line:23,column:11},end:{line:27,column:5}},"13":{start:{line:24,column:6},end:{line:24,column:24}},"14":{start:{line:26,column:6},end:{line:26,column:18}}},fnMap:{"0":{name:"transform",decl:{start:{line:1,column:16},end:{line:1,column:25}},loc:{start:{line:1,column:34},end:{line:15,column:1}},line:1},"1":{name:"(anonymous_1)",decl:{start:{line:5,column:9},end:{line:5,column:10}},loc:{start:{line:5,column:16},end:{line:14,column:5}},line:5},"2":{name:"makeNewMessage",decl:{start:{line:17,column:9},end:{line:17,column:23}},loc:{start:{line:17,column:31},end:{line:29,column:1}},line:17},"3":{name:"(anonymous_3)",decl:{start:{line:18,column:22},end:{line:18,column:23}},loc:{start:{line:18,column:40},end:{line:28,column:3}},line:18}},branchMap:{"0":{loc:{start:{line:8,column:6},end:{line:13,column:7}},type:"if",locations:[{start:{line:8,column:6},end:{line:13,column:7}},{start:{line:8,column:6},end:{line:13,column:7}}],line:8},"1":{loc:{start:{line:19,column:4},end:{line:27,column:5}},type:"if",locations:[{start:{line:19,column:4},end:{line:27,column:5}},{start:{line:19,column:4},end:{line:27,column:5}}],line:19},"2":{loc:{start:{line:19,column:7},end:{line:19,column:45}},type:"binary-expr",locations:[{start:{line:19,column:7},end:{line:19,column:27}},{start:{line:19,column:31},end:{line:19,column:45}}],line:19},"3":{loc:{start:{line:21,column:11},end:{line:27,column:5}},type:"if",locations:[{start:{line:21,column:11},end:{line:27,column:5}},{start:{line:21,column:11},end:{line:27,column:5}}],line:21},"4":{loc:{start:{line:21,column:14},end:{line:21,column:40}},type:"binary-expr",locations:[{start:{line:21,column:14},end:{line:21,column:22}},{start:{line:21,column:26},end:{line:21,column:40}}],line:21},"5":{loc:{start:{line:23,column:11},end:{line:27,column:5}},type:"if",locations:[{start:{line:23,column:11},end:{line:27,column:5}},{start:{line:23,column:11},end:{line:27,column:5}}],line:23}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0},f:{"0":0,"1":0,"2":0,"3":0},b:{"0":[0,0],"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"0b5ca6f3f41d250794e7e9d4b58cff49ad750a68"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_5ke7tx3h5=function(){return actualCoverage;};}return actualCoverage;}cov_5ke7tx3h5();export function transform(errors){cov_5ke7tx3h5().f[0]++;cov_5ke7tx3h5().s[0]++;// JSONSchema refers to the current object being validated
// as 'instance'. This isn't helpful to users, so we remove it.
return errors.map(err=>{cov_5ke7tx3h5().f[1]++;let seekStr=(cov_5ke7tx3h5().s[1]++,"is not of a type(s)");let i=(cov_5ke7tx3h5().s[2]++,err.get("message").indexOf(seekStr));cov_5ke7tx3h5().s[3]++;if(i>-1){cov_5ke7tx3h5().b[0][0]++;let types=(cov_5ke7tx3h5().s[4]++,err.get("message").slice(i+seekStr.length).split(","));cov_5ke7tx3h5().s[5]++;return err.set("message",err.get("message").slice(0,i)+makeNewMessage(types));}else{cov_5ke7tx3h5().b[0][1]++;cov_5ke7tx3h5().s[6]++;return err;}});}function makeNewMessage(types){cov_5ke7tx3h5().f[2]++;cov_5ke7tx3h5().s[7]++;return types.reduce((p,c,i,arr)=>{cov_5ke7tx3h5().f[3]++;cov_5ke7tx3h5().s[8]++;if((cov_5ke7tx3h5().b[2][0]++,i===arr.length-1)&&(cov_5ke7tx3h5().b[2][1]++,arr.length>1)){cov_5ke7tx3h5().b[1][0]++;cov_5ke7tx3h5().s[9]++;return p+"or "+c;}else{cov_5ke7tx3h5().b[1][1]++;cov_5ke7tx3h5().s[10]++;if((cov_5ke7tx3h5().b[4][0]++,arr[i+1])&&(cov_5ke7tx3h5().b[4][1]++,arr.length>2)){cov_5ke7tx3h5().b[3][0]++;cov_5ke7tx3h5().s[11]++;return p+c+", ";}else{cov_5ke7tx3h5().b[3][1]++;cov_5ke7tx3h5().s[12]++;if(arr[i+1]){cov_5ke7tx3h5().b[5][0]++;cov_5ke7tx3h5().s[13]++;return p+c+" ";}else{cov_5ke7tx3h5().b[5][1]++;cov_5ke7tx3h5().s[14]++;return p+c;}}}},"should be a");}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfNWtlN3R4M2g1IiwiYWN0dWFsQ292ZXJhZ2UiLCJ0cmFuc2Zvcm0iLCJlcnJvcnMiLCJmIiwicyIsIm1hcCIsImVyciIsInNlZWtTdHIiLCJpIiwiZ2V0IiwiaW5kZXhPZiIsImIiLCJ0eXBlcyIsInNsaWNlIiwibGVuZ3RoIiwic3BsaXQiLCJzZXQiLCJtYWtlTmV3TWVzc2FnZSIsInJlZHVjZSIsInAiLCJjIiwiYXJyIl0sInNvdXJjZXMiOlsibm90LW9mLXR5cGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybShlcnJvcnMpIHtcclxuICAvLyBKU09OU2NoZW1hIHJlZmVycyB0byB0aGUgY3VycmVudCBvYmplY3QgYmVpbmcgdmFsaWRhdGVkXHJcbiAgLy8gYXMgJ2luc3RhbmNlJy4gVGhpcyBpc24ndCBoZWxwZnVsIHRvIHVzZXJzLCBzbyB3ZSByZW1vdmUgaXQuXHJcbiAgcmV0dXJuIGVycm9yc1xyXG4gICAgLm1hcChlcnIgPT4ge1xyXG4gICAgICBsZXQgc2Vla1N0ciA9IFwiaXMgbm90IG9mIGEgdHlwZShzKVwiXHJcbiAgICAgIGxldCBpID0gZXJyLmdldChcIm1lc3NhZ2VcIikuaW5kZXhPZihzZWVrU3RyKVxyXG4gICAgICBpZihpID4gLTEpIHtcclxuICAgICAgICBsZXQgdHlwZXMgPSBlcnIuZ2V0KFwibWVzc2FnZVwiKS5zbGljZShpICsgc2Vla1N0ci5sZW5ndGgpLnNwbGl0KFwiLFwiKVxyXG4gICAgICAgIHJldHVybiBlcnIuc2V0KFwibWVzc2FnZVwiLCBlcnIuZ2V0KFwibWVzc2FnZVwiKS5zbGljZSgwLCBpKSArIG1ha2VOZXdNZXNzYWdlKHR5cGVzKSlcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gZXJyXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1ha2VOZXdNZXNzYWdlKHR5cGVzKSB7XHJcbiAgcmV0dXJuIHR5cGVzLnJlZHVjZSgocCwgYywgaSwgYXJyKSA9PiB7XHJcbiAgICBpZihpID09PSBhcnIubGVuZ3RoIC0gMSAmJiBhcnIubGVuZ3RoID4gMSkge1xyXG4gICAgICByZXR1cm4gcCArIFwib3IgXCIgKyBjXHJcbiAgICB9IGVsc2UgaWYoYXJyW2krMV0gJiYgYXJyLmxlbmd0aCA+IDIpIHtcclxuICAgICAgcmV0dXJuIHAgKyBjICsgXCIsIFwiXHJcbiAgICB9IGVsc2UgaWYoYXJyW2krMV0pIHtcclxuICAgICAgcmV0dXJuIHAgKyBjICsgXCIgXCJcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBwICsgY1xyXG4gICAgfVxyXG4gIH0sIFwic2hvdWxkIGJlIGFcIilcclxufVxyXG4iXSwibWFwcGluZ3MiOiJpN0dBZVk7QUFBQUEsYUFBQSxTQUFBQSxDQUFBLFNBQUFDLGNBQUEsV0FBQUEsY0FBQSxFQUFBRCxhQUFBLEdBZlosTUFBTyxTQUFTLENBQUFFLFNBQVNBLENBQUNDLE1BQU0sQ0FBRSxDQUFBSCxhQUFBLEdBQUFJLENBQUEsTUFBQUosYUFBQSxHQUFBSyxDQUFBLE1BQ2hDO0FBQ0E7QUFDQSxNQUFPLENBQUFGLE1BQU0sQ0FDVkcsR0FBRyxDQUFDQyxHQUFHLEVBQUksQ0FBQVAsYUFBQSxHQUFBSSxDQUFBLE1BQ1YsR0FBSSxDQUFBSSxPQUFPLEVBQUFSLGFBQUEsR0FBQUssQ0FBQSxNQUFHLHFCQUFxQixFQUNuQyxHQUFJLENBQUFJLENBQUMsRUFBQVQsYUFBQSxHQUFBSyxDQUFBLE1BQUdFLEdBQUcsQ0FBQ0csR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDQyxPQUFPLENBQUNILE9BQU8sQ0FBQyxFQUFBUixhQUFBLEdBQUFLLENBQUEsTUFDM0MsR0FBR0ksQ0FBQyxDQUFHLENBQUMsQ0FBQyxDQUFFLENBQUFULGFBQUEsR0FBQVksQ0FBQSxTQUNULEdBQUksQ0FBQUMsS0FBSyxFQUFBYixhQUFBLEdBQUFLLENBQUEsTUFBR0UsR0FBRyxDQUFDRyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUNJLEtBQUssQ0FBQ0wsQ0FBQyxDQUFHRCxPQUFPLENBQUNPLE1BQU0sQ0FBQyxDQUFDQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUFoQixhQUFBLEdBQUFLLENBQUEsTUFDbkUsTUFBTyxDQUFBRSxHQUFHLENBQUNVLEdBQUcsQ0FBQyxTQUFTLENBQUVWLEdBQUcsQ0FBQ0csR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDSSxLQUFLLENBQUMsQ0FBQyxDQUFFTCxDQUFDLENBQUMsQ0FBR1MsY0FBYyxDQUFDTCxLQUFLLENBQUMsQ0FBQyxDQUNuRixDQUFDLElBQU0sQ0FBQWIsYUFBQSxHQUFBWSxDQUFBLFNBQUFaLGFBQUEsR0FBQUssQ0FBQSxNQUNMLE1BQU8sQ0FBQUUsR0FBRyxDQUNaLENBQ0YsQ0FBQyxDQUFDLENBQ04sQ0FFQSxRQUFTLENBQUFXLGNBQWNBLENBQUNMLEtBQUssQ0FBRSxDQUFBYixhQUFBLEdBQUFJLENBQUEsTUFBQUosYUFBQSxHQUFBSyxDQUFBLE1BQzdCLE1BQU8sQ0FBQVEsS0FBSyxDQUFDTSxNQUFNLENBQUMsQ0FBQ0MsQ0FBQyxDQUFFQyxDQUFDLENBQUVaLENBQUMsQ0FBRWEsR0FBRyxHQUFLLENBQUF0QixhQUFBLEdBQUFJLENBQUEsTUFBQUosYUFBQSxHQUFBSyxDQUFBLE1BQ3BDLEdBQUcsQ0FBQUwsYUFBQSxHQUFBWSxDQUFBLFNBQUFILENBQUMsR0FBS2EsR0FBRyxDQUFDUCxNQUFNLENBQUcsQ0FBQyxJQUFBZixhQUFBLEdBQUFZLENBQUEsU0FBSVUsR0FBRyxDQUFDUCxNQUFNLENBQUcsQ0FBQyxFQUFFLENBQUFmLGFBQUEsR0FBQVksQ0FBQSxTQUFBWixhQUFBLEdBQUFLLENBQUEsTUFDekMsTUFBTyxDQUFBZSxDQUFDLENBQUcsS0FBSyxDQUFHQyxDQUFDLENBQ3RCLENBQUMsSUFBTSxDQUFBckIsYUFBQSxHQUFBWSxDQUFBLFNBQUFaLGFBQUEsR0FBQUssQ0FBQSxVQUFHLENBQUFMLGFBQUEsR0FBQVksQ0FBQSxTQUFBVSxHQUFHLENBQUNiLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBQVQsYUFBQSxHQUFBWSxDQUFBLFNBQUlVLEdBQUcsQ0FBQ1AsTUFBTSxDQUFHLENBQUMsRUFBRSxDQUFBZixhQUFBLEdBQUFZLENBQUEsU0FBQVosYUFBQSxHQUFBSyxDQUFBLE9BQ3BDLE1BQU8sQ0FBQWUsQ0FBQyxDQUFHQyxDQUFDLENBQUcsSUFBSSxDQUNyQixDQUFDLElBQU0sQ0FBQXJCLGFBQUEsR0FBQVksQ0FBQSxTQUFBWixhQUFBLEdBQUFLLENBQUEsVUFBR2lCLEdBQUcsQ0FBQ2IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUFULGFBQUEsR0FBQVksQ0FBQSxTQUFBWixhQUFBLEdBQUFLLENBQUEsT0FDbEIsTUFBTyxDQUFBZSxDQUFDLENBQUdDLENBQUMsQ0FBRyxHQUFHLENBQ3BCLENBQUMsSUFBTSxDQUFBckIsYUFBQSxHQUFBWSxDQUFBLFNBQUFaLGFBQUEsR0FBQUssQ0FBQSxPQUNMLE1BQU8sQ0FBQWUsQ0FBQyxDQUFHQyxDQUFDLENBQ2QsR0FDRixDQUFDLENBQUUsYUFBYSxDQUFDLENBQ25CIn0=