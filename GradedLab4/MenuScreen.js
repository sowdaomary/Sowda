import react from 'react';
import {Text, View, ScrollView, SafeAreaView, StyleSheet, Image, Inputtext, TouchableOpacity, Button} from 'react-native'
import { useCart } from './CartContext';



export default function MenuScreen(navigation) {

  const { addToCart } = useCart();

  const Handeladdtocart = (iteam) => {
    addToCart(iteam);
    navigation.navigate(Cart);
  }

  const MenuIteams = [
    {id: 1,
     name: 'Bulgogi (불고기)', 
     image: 'https://i.pinimg.com/564x/b5/d4/6c/b5d46ccdc74ec72e11cf05753337f8c2.jpg',
     discription: 'Thinly sliced beef, marinated in a mixture of soy sauce, sugar, sesame oil, garlic, and pepper, then grilled or stir-fried',
     price: 'R400'},

     {id: 2,
     name: 'Galbi (갈비)', 
     image: 'https://i.pinimg.com/564x/1e/ae/93/1eae93d0464cdc1134980d4f619fa512.jpg',
     discription: 'Beef short ribs, marinated in a sweet and savory sauce made from soy sauce, garlic, and sugar, then grilled or barbecued.',
     price: 'R500'},

    {id: 3,
     name: 'Tteokbokki (떡볶이)', 
     image: 'https://i.pinimg.com/564x/a6/7c/8a/a67c8abcb750438f50ecd4444f78695d.jpg',
     discription: 'Spicy rice cakes made from chewy cylindrical rice cakes stir-fried with a spicy gochujang sauce, often mixed with fish cakes and boiled eggs.',
     price: 'R250'},

    {id: 4,
     name: 'Kimbap (김밥)', 
     image: 'https://i.pinimg.com/564x/47/1e/53/471e536e79df115e09ade29003121526.jpg',
     discription: 'kimbap is made with rice, various fillings like pickled radish, spinach, carrots, eggs, and meat, rolled in seaweed and sliced into bite-sized pieces.',
     price: 'R150'},


    {id: 5,
     name: 'Banchan (반찬)', 
     image: 'https://i.pinimg.com/564x/46/4c/cb/464ccb3225c0047c91425b83365b6983.jpg',
     discription: 'Side dishes served along with rice in Korean cuisine. These can include various types of kimchi, pickled vegetables, small portions of stir-fried or steamed dishes, and more.',
     price: 'R150'},

    
    {id: 6,
     name: 'Kimchi Jjigae (김치찌개)', 
     image: 'https://i.pinimg.com/736x/d3/a2/da/d3a2da1aec4e7f5f5e740510042075ce.jpg',
     discription: 'A hearty stew made with kimchi, tofu, pork (or tuna), and vegetables, flavored with gochujang (chili paste) or gochugaru (chili flakes).',
     price: 'R350'},


    {id: 7,
     name: 'Sundubu Jjigae (순두부찌개)', 
     image: 'https://i.pinimg.com/736x/60/bb/0c/60bb0cd871c7e552c449f6e1b2547fa8.jpg',
     discription: 'A spicy soft tofu stew that usually includes vegetables, mushrooms, seafood (like clams or shrimp), and a raw egg, which is added right before serving.',
     price: 'R350'},


     {id: 8,
     name: 'Dakgangjeong (닭강정)', 
     image: 'https://i.pinimg.com/564x/99/94/1b/99941b9d347b5eb4f735a18f30eaf5c4.jpg',
     discription: 'Crispy fried chicken, often coated in a sweet and spicy sauce. This dish is similar to Korean fried chicken (KFC) but with a sweeter, stickier glaze.',
     price: 'R300'},
  ]

  return(
    <ScrollView style={styles.continer}>
      <Text style={styles.header}>Seoul Garden</Text>
      <Text style={styles.header2}>Menu</Text>
      {MenuIteams.map((iteam) => (
        <TouchableOpacity key={iteam.id} style={styles.iteam}>
          <View>
            <Text style={styles.name}>{iteam.name}</Text>
            <Image source={{ uri: iteam.image }} style={styles.image} />
            <Text style={styles.discription}>{iteam.discription}</Text>
            <Text style={styles.price}>{iteam.price}</Text>
            <TouchableOpacity style={styles.button}  onPress={() => Handeladdtocart(iteam)}><Text>Add to cart</Text></TouchableOpacity>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
header: {
flex:1,
textAlign: 'center',
fontSize: 30,
fontWeight: 'bold',
},
header2: {
flex: 1,
fontWeight: 'bold',
textAlign: 'center',
fontSize: 20,
marginBottom: 20,
},
continer:{
flex: 1,
backgroundColor: 'white',
},
button:{
backgroundColor: 'lightgreen',
borderRadius: 30,
padding: 10,
marginTop: 10,
alignItems: 'center',
},
iteam:{
backgroundColor: 'white', 
padding: 10,
marginBottom: 20,
borderRadius: 30, 
shadowColor: 'gray',
shadowOffset: { width: 0, height: 2 },
shadowOpacity: 0.25, 
shadowRadius: 3.84, 
elevation: 5, 
},
image:{
width: 100,
height: 100, 
marginBottom: 30,
alignSelf: 'center'
},
name:{
flex: 1,
textAlign: 'center',
fontSize: 14,
fontWeight: 'bold',
marginBottom: 30,
},
discription:{
fontFamily: 'Arial',
fontSize: 13,
},
price: {
color: 'red',
fontWeight: 'bold',
}
})



