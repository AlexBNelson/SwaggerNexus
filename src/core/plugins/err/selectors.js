function cov_1r7bvinugj(){var path="C:\\Users\\User\\source\\repos\\multi-swagger\\Multi-Swagger\\src\\core\\plugins\\err\\selectors.js";var hash="5d6ecf1ae5f0d15694ef9d863ff75067e5244b25";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"C:\\Users\\User\\source\\repos\\multi-swagger\\Multi-Swagger\\src\\core\\plugins\\err\\selectors.js",statementMap:{"0":{start:{line:4,column:14},end:{line:4,column:28}},"1":{start:{line:4,column:23},end:{line:4,column:28}},"2":{start:{line:6,column:25},end:{line:9,column:1}},"3":{start:{line:8,column:9},end:{line:8,column:34}},"4":{start:{line:11,column:25},end:{line:14,column:1}},"5":{start:{line:13,column:9},end:{line:13,column:19}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:4,column:14},end:{line:4,column:15}},loc:{start:{line:4,column:23},end:{line:4,column:28}},line:4},"1":{name:"(anonymous_1)",decl:{start:{line:8,column:2},end:{line:8,column:3}},loc:{start:{line:8,column:9},end:{line:8,column:34}},line:8},"2":{name:"(anonymous_2)",decl:{start:{line:13,column:2},end:{line:13,column:3}},loc:{start:{line:13,column:9},end:{line:13,column:19}},line:13}},branchMap:{},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0},f:{"0":0,"1":0,"2":0},b:{},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"5d6ecf1ae5f0d15694ef9d863ff75067e5244b25"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_1r7bvinugj=function(){return actualCoverage;};}return actualCoverage;}cov_1r7bvinugj();import{List}from"immutable";import{createSelector}from"reselect";cov_1r7bvinugj().s[0]++;const state=state=>{cov_1r7bvinugj().f[0]++;cov_1r7bvinugj().s[1]++;return state;};export const allErrors=(cov_1r7bvinugj().s[2]++,createSelector(state,err=>{cov_1r7bvinugj().f[1]++;cov_1r7bvinugj().s[3]++;return err.get("errors",List());}));export const lastError=(cov_1r7bvinugj().s[4]++,createSelector(allErrors,all=>{cov_1r7bvinugj().f[2]++;cov_1r7bvinugj().s[5]++;return all.last();}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMXI3YnZpbnVnaiIsImFjdHVhbENvdmVyYWdlIiwiTGlzdCIsImNyZWF0ZVNlbGVjdG9yIiwicyIsInN0YXRlIiwiYWxsRXJyb3JzIiwiZXJyIiwiZiIsImdldCIsImxhc3RFcnJvciIsImFsbCIsImxhc3QiXSwic291cmNlcyI6WyJzZWxlY3RvcnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGlzdCB9IGZyb20gXCJpbW11dGFibGVcIlxyXG5pbXBvcnQgeyBjcmVhdGVTZWxlY3RvciB9IGZyb20gXCJyZXNlbGVjdFwiXHJcblxyXG5jb25zdCBzdGF0ZSA9IHN0YXRlID0+IHN0YXRlXHJcblxyXG5leHBvcnQgY29uc3QgYWxsRXJyb3JzID0gY3JlYXRlU2VsZWN0b3IoXHJcbiAgc3RhdGUsXHJcbiAgZXJyID0+IGVyci5nZXQoXCJlcnJvcnNcIiwgTGlzdCgpKVxyXG4pXHJcblxyXG5leHBvcnQgY29uc3QgbGFzdEVycm9yID0gY3JlYXRlU2VsZWN0b3IoXHJcbiAgYWxsRXJyb3JzLFxyXG4gIGFsbCA9PiBhbGwubGFzdCgpXHJcbilcclxuXHJcbiJdLCJtYXBwaW5ncyI6Inc5Q0FlWTtBQUFBQSxjQUFBLFNBQUFBLENBQUEsU0FBQUMsY0FBQSxXQUFBQSxjQUFBLEVBQUFELGNBQUEsR0FmWixPQUFTRSxJQUFJLEtBQVEsV0FBVyxDQUNoQyxPQUFTQyxjQUFjLEtBQVEsVUFBVSxDQUFBSCxjQUFBLEdBQUFJLENBQUEsTUFFekMsS0FBTSxDQUFBQyxLQUFLLENBQUdBLEtBQUssRUFBSUEsd0JBQUEsQ0FBQUEsdUJBQUEsQ0FBQUEsTUFBQSxDQUFBQSxLQUFLLENBQUQsQ0FBQyxDQUU1QixNQUFPLE1BQU0sQ0FBQUMsU0FBUyxFQUFBTixjQUFBLEdBQUFJLENBQUEsTUFBR0QsY0FBYyxDQUNyQ0UsS0FBSyxDQUNMRSxHQUFHLEVBQUksQ0FBQVAsY0FBQSxHQUFBUSxDQUFBLE1BQUFSLGNBQUEsR0FBQUksQ0FBQSxhQUFBRyxHQUFHLENBQUNFLEdBQUcsQ0FBQyxRQUFRLENBQUVQLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBRCxDQUNqQyxDQUFDLEVBRUQsTUFBTyxNQUFNLENBQUFRLFNBQVMsRUFBQVYsY0FBQSxHQUFBSSxDQUFBLE1BQUdELGNBQWMsQ0FDckNHLFNBQVMsQ0FDVEssR0FBRyxFQUFJLENBQUFYLGNBQUEsR0FBQVEsQ0FBQSxNQUFBUixjQUFBLEdBQUFJLENBQUEsYUFBQU8sR0FBRyxDQUFDQyxJQUFJLENBQUMsQ0FBQyxDQUFELENBQ2xCLENBQUMifQ==