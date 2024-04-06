using System.Text.Json;
using API.interfaces;

namespace file_service;

public class MyFileService : Ifile
{
 public string FilePath{get;set;} 
 public string FileName{get;set;} 

 public MyFileService(string fileName,string filePath)
 {
    this.FileName = fileName;
  this.FilePath=Path.Combine(Environment.CurrentDirectory,filePath );
  // this.FileName="myFile.json";
   //this.FilePath = Path.Combine(Environment.CurrentDirectory, "files");
 }
//init the name file
public void setFilePath(string fileName,string filePath)
{
  this.FileName = fileName;
  this.FilePath=Path.Combine(Environment.CurrentDirectory,filePath );
}

//read from file
     public List<T> Gets<T>()
     {
       string json=File.ReadAllText(Path.Combine(FilePath,FileName));
       if(json!=null)
        Console.WriteLine("obj",json);
        else
        Console.WriteLine("nooo");
     // string json=File.ReadAllText(FilePath);
      List<T> objs=JsonSerializer.Deserialize<List<T>>(json);
     Console.WriteLine("obj",objs);
      if(objs==null)
       return null;
      return objs; 

     }
     //write to file
     public void Write(string obj)
     {
        if(File.Exists(Path.Combine(FilePath,FileName)))
        File.WriteAllText(Path.Combine(FilePath,FileName),obj);
     }
     //update tha data in the file
     public void Update<T>(List<T> list)
     {
       string josonObj=JsonSerializer.Serialize(list);
       Write(josonObj);
     }
     //add item to file
     public void AddItem<T>(T item)
     {
       List<T> l=Gets<T>();
       System.Console.WriteLine(l);
       l.Add(item);
       Update<T>(l);
     }

}

