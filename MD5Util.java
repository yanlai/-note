public  static String changeMD5(String s) {
	        char hexDigits[]={'0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'};       
	        try {
	            byte[] btInput = s.getBytes();
	            // 获得MD5摘要算法的 MessageDigest 对象
	            MessageDigest mdInst = MessageDigest.getInstance("MD5");
	            md.update(source);      //更新摘要  
		    byte tmp[]=md.digest(); //进行md5计算  
		    char str[] =new char[ 16*2 ]; //md的结果是128位的长整数，用16进制表示的话就是32位，即32个字符表示  

		    int k = 0;  
		    for( int i=0 ; i<16; i++){  
			byte byte0 =tmp[i];  
			str[k++] = hexDigits[ byte0 >>> 4 & 0xf];//低四位与1111做逻辑与运算 得到16进制数存入低位  
			str[k++] = hexDigits[ byte0 & 0xf];     //高四位与1111做逻辑与运算得到16进制存入高位  
		    }  
	            return new String(str);
	        } catch (Exception e) {
	            e.printStackTrace();
	            return null;
	        }
	    }
	 
	 public static void main(String[] args) {
		String pass="123456";
		String md5 = changeMD5(pass);
		System.out.println(md5);
	}
