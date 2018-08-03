//파일 업로드 - JSON
package bitcamp.java106.pms.web.json;

import java.io.File;
import java.util.HashMap;
import java.util.UUID;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController 
@RequestMapping("/mpfile") 
public class MypageUpload {
 
     @Autowired ServletContext sc;
     
     @PostMapping("upload")
     public Object upload01(
             MultipartFile files) {
         
         HashMap<String,Object> jsonData = new HashMap<>();
         
         String filesDir = sc.getRealPath("/files");
     
         String filename = UUID.randomUUID().toString();
         jsonData.put("filename", filename);
         jsonData.put("filesize", files.getSize());
         jsonData.put("originname", files.getOriginalFilename());
         try {
             File path = new File(filesDir + "/" + filename);
                 System.out.println(path);
                 files.transferTo(path);
             } catch (Exception e) {
                 e.printStackTrace();
             }
             return jsonData;
     }
}