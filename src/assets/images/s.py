import os
import requests
from datetime import datetime

def download_public_photos(username):
    # إنشاء مجلد باسم الحساب لحفظ الصور
    if not os.path.exists(username):
        os.makedirs(username)
        
    # تعديل الـ Headers لتبدو كمتصفح حقيقي وتجنب الـ 403
    headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    "X-IG-App-ID": "936619743392459",
    "Accept": "*/*",
    "Accept-Language": "en-US,en;q=0.9",
    "Cookie": "sessionid=54196139664:U4BIaJG7daQ13g:0:AYhzFoJBKfXmrjBaVi_gjQCJBK88GMVZVmwJmm-ihA; csrftoken=2DBqzhqlXGllaUVY1Z7pXRNJQukWlj1d"
}
    
    url = f"https://www.instagram.com/api/v1/users/web_profile_info/?username={username}"
    
    try:
        response = requests.get(url, headers=headers)
        if response.status_code != 200:
            print(f"فشل الاتصال بالخادم. كود الخطأ: {response.status_code}")
            return
            
        data = response.json()
        user_data = data.get('data', {}).get('user', {})
        if not user_data:
            print("لم يتم العثور على بيانات الحساب.")
            return
            
        # جلب المنشورات
        timeline = user_data.get('edge_owner_to_timeline_media', {}).get('edges', [])
        
        for edge in timeline:
            node = edge.get('node', {})
            
            # 1. تخطي الفيديوهات
            if node.get('is_video'):
                continue
                
            # 2. التحقق من التاريخ (منذ بداية سنة 2026)
            timestamp = node.get('taken_at_timestamp')
            post_date = datetime.utcfromtimestamp(timestamp)
            
            if post_date < datetime(2026, 1, 1):
                print(f"تم الوصول إلى منشورات قديمة بتاريخ {post_date.date()}، التوقف الآن.")
                break
                
            # 3. جلب أعلى جودة متاحة للصورة
            display_url = node.get('display_url')
            shortcode = node.get('shortcode')
            
            # تحميل الصورة
            img_data = requests.get(display_url).content
            file_path = os.path.join(username, f"{shortcode}.jpg")
            
            with open(file_path, 'wb') as handler:
                handler.write(img_data)
                
            print(f"📸 تم تحميل الصورة: {shortcode}.jpg | تاريخ النشر: {post_date.date()}")
            
    except Exception as e:
        print(f"حدث خطأ أثناء التشغيل: {e}")

# تشغيل السكربت على الحساب المطلوب
download_public_photos("arabianpharaoh")