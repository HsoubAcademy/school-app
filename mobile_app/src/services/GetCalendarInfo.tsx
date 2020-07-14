

export const getClassName = (period:string) => {
    switch(period) { 
        case "1": { 
           return 'الحصة الأولى'
           
        } 
        case "2": { 
            return 'الحصة الثانية'
            
         } 
         case "3": { 
            return 'الحصة الثالثة'
            
         } 
         case "4": { 
            return 'الحصة الرابعة'
            
         } 
         case "5": { 
            return 'الحصة الخامسة'
            
         } 
        default: { 
            return 'الحصة السادسة'
           
        } 
     } 
};

export const getClassTime = (period:string) => {
    switch(period) { 
        case "1": { 
           return '08:00'
           
        } 
        case "2": { 
            return '09:00'
            
         } 
         case "3": { 
            return '11:00'
            
         } 
         case "4": { 
            return '12:00'
            
         } 
         case "5": { 
            return '01:00'
            
         } 
        default: { 
            return '02:00'
           
        } 
     } 
};

export default getClassName;
