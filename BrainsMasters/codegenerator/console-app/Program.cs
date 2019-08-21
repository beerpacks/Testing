using System;
using System.IO;
using System.Collections;
using System.Collections.Generic;

namespace console_app
{
    class ActionGen{
        public string name;
        public string requestType;
        public string responseType;
    }

    class Program
    {
        static string pathToFrontEnd = "../frontend/src/generated/";
        
        static void Main(string[] args)
        {
            string controllerPath = @"..\backend\src\controller";
            string controllerTypes = @"..\backend\src\controllertypes";
            clearFilesGenerated();
            generateTypes(controllerTypes);
            generateController(controllerPath);
        }

        static void clearFilesGenerated(){
            try{
            DirectoryInfo d = new DirectoryInfo(pathToFrontEnd);
    foreach (FileInfo file in d.GetFiles("*.ts"))
            {
                File.Delete(file.FullName);
            }
    }catch(Exception e){

    }
        }

static void generateTypes(string path){
    try{
            DirectoryInfo d = new DirectoryInfo(path);
    foreach (FileInfo file in d.GetFiles("*.ts"))
            {
                System.IO.File.Copy(file.FullName, pathToFrontEnd +file.Name);
            }
    }catch(Exception e){

    }
}

        static void generateController(string path){
            DirectoryInfo d = new DirectoryInfo(path);

            foreach (FileInfo file in d.GetFiles("*.ts"))
            {
                if(file.Name.Contains("controller")){
                    string[] lines = System.IO.File.ReadAllLines(file.FullName);
                    string controllerName = "";
                    ArrayList actionList = new ArrayList();
                    ActionGen tmp = new ActionGen();
                             
                    foreach(string line in lines){
                        if(line.Contains("@Controller")){
                            controllerName = getControllerName(line);
                         }
                         if(line.Contains("@Post")){
                            tmp.name = getActionName(line);
                         }
                         if(line.Contains("private")){
                             if(isActionDeclaration(line, tmp.name)){
                                 tmp.requestType = getRequestObjectType(line);
                                 tmp.responseType = getResponseObjectType(line);
                                 actionList.Add(tmp);
                                 tmp = new ActionGen();
                             }
                         }
                    }
                    generateControllerFrontEnd(controllerName,actionList);
                }
            }
        }

        static string getControllerName(string line){
            return line.Replace("@Controller('api/", "").Replace("')","").Trim();
        }

        static string getActionName(string line){
            return line.Replace("@Post('","").Replace("')","").Trim();
        }

        static Boolean isActionDeclaration(string line, string name){
            if(name == null)
                return false;
            return line.Contains(name) && line.Contains("Action");
        }

        static string getRequestObjectType(string line){
            int starter =  line.IndexOf(":")+1;
            int dister = line.IndexOf(",") - starter;
            string testVal = line.Substring(starter, dister);
            return testVal.Trim();
        }

        static string getResponseObjectType(string line){
            int starter =  line.LastIndexOf(":") +1;
            int dister = line.IndexOf(")") - starter;
            string testVal = line.Substring(starter, dister);
            return testVal.Trim();
        }

        static void generateControllerFrontEnd(string controllerName, ArrayList actionList){
            ArrayList eachLiner = new ArrayList();
            string controllernameWithType = controllerName + "types";
            eachLiner.Add("import { apiCall } from \"../utils\";");
            eachLiner.Add($"import * as {controllernameWithType} from \"./{controllernameWithType}\";");

            foreach(ActionGen actions in actionList){
                eachLiner.Add("export async function " + actions.name + "(request:"+controllernameWithType+"."+actions.requestType+"){");//,response:" +controllernameWithType+"."+ actions.responseType+
                eachLiner.Add("return await apiCall<"+controllernameWithType+"."+actions.requestType+"," + controllernameWithType+"."+actions.responseType+">(");
                eachLiner.Add("'"+controllerName+"',");
                eachLiner.Add("'"+actions.name + "',");
                eachLiner.Add("request,");
                eachLiner.Add("null,");
                eachLiner.Add("null,");
                eachLiner.Add("false");
                eachLiner.Add(");");
                eachLiner.Add("}");
            }

            string[] lines = (string[]) eachLiner.ToArray(typeof(string));
            System.IO.File.WriteAllLines(pathToFrontEnd+controllerName+"controller"+".ts", lines);
        }
    }
}
