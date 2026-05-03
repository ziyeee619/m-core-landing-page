import fitz  # PyMuPDF
import os

def extract_images_from_pdf(pdf_path, output_dir):
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)
        
    doc = fitz.open(pdf_path)
    img_count = 0
    
    for page_index in range(len(doc)):
        for img_index, img in enumerate(doc.get_page_images(page_index)):
            xref = img[0]
            base_image = doc.extract_image(xref)
            image_bytes = base_image["image"]
            image_ext = base_image["ext"]
            
            image_name = f"extracted_img_{img_count + 1}.{image_ext}"
            with open(os.path.join(output_dir, image_name), "wb") as f:
                f.write(image_bytes)
            
            print(f"已提取: {image_name}")
            img_count += 1
            
    doc.close()
    print(f"完成！共提取了 {img_count} 張圖片。")

extract_images_from_pdf("M-Core产品介绍(中).pdf", "extracted_assets")