import { Pipe, Injectable, PipeTransform } from "@angular/core";

// @Pipe({name: 'filterSitters'}) //This is what you use in html.
// @Injectable({providedIn: 'root'})
// export class FilterSitters implements PipeTransform {

//     transform(items: Sitter[], search: string): any{
//         //Remember to import in ngmodules

//         // console.log(items);
//         // console.log(search);  
//         if(search !== undefined) {
//             return items.filter(x => x.name.toLowerCase().includes(search.toLowerCase()) || 
//             x.zipCode == search); 
//         }
//         else
//             return items;
//     }
// }

@Pipe({name: 'genderFilter'}) //This is what you use in html.
@Injectable({providedIn: 'root'})
export class GenderFilter implements PipeTransform {

    transform(female: boolean): any{
        // console.log(female);
        let femalestr = female.toString();
        if(femalestr === 'true') {
            // console.log('if', female);
            return "Female"; 
        }  
        else {
            // console.log('else', female);
            return "Male";
        }
    }
}

//Used for values like: isActive
@Pipe({name: 'yesNoBooleanFilter'}) //This is what you use in html.
@Injectable({providedIn: 'root'})
export class YesNoBooleanFilter implements PipeTransform {

    transform(value: boolean): any{
        let valueString = value.toString();
        // console.log(value)
        // console.log(typeof(value));
        if(valueString === '1' || valueString === 'true') {
            return "Ja"; 
        }  
        else if (valueString === '0' || valueString === 'false') {
            return "Nej";
        }
    }
}

// Custom propperly displays currency values. 
@Pipe({name: 'customCurrencyFilter'}) //This is what you use in html.
@Injectable({providedIn: 'root'})
export class CustomCurrencyFilter implements PipeTransform {
    transform(price: number): any{ 
        let thePrice = Number(price);
        thePrice /= 100; //Divide by 100 because currency is stored as oere in the database.
        let thePriceString = thePrice.toString();
        return "DKK" + thePriceString; //Perhaps make take currency type as param and concatinate here.
    }
}
