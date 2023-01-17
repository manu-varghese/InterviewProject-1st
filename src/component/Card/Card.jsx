import React, { useEffect, useState } from 'react'
import './Card.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import axios from 'axios'

function Card() {
    
    const [value,setValue] = useState([])

    useEffect(()=>{
        axios.get('https://api.xentice.com/api/postadSelect').then((res)=>{
            setValue(res.data)
        })
    },[])
  
        function cleaner(data) {
            let returnValue = [];
            for (let key in data) {
                // data[key] = replacer(data[key]);
                returnValue.push(replacer(data[key]))
            }
            return returnValue;
        }

        function replacer(data) {
            let output = {}
            output.propertyType = JSON.parse(data.propertyType);
            output.transactionType = JSON.parse(data.transactionType);
            output.location = JSON.parse(data.location);
            output.details = JSON.parse(data.details);
            output.priceRange = JSON.parse(data.priceRange);
            output.images = JSON.parse(data.images);
            output.id = data.id
            output.userid = data.userid
            output.verified = data.verified
            return output;
        }



        let cleanerValue = cleaner(value)

        console.log(cleanerValue);

        console.log('seperation');

        const IndustrialLandData = cleanerValue.filter(element=>{
            if(element.propertyType.name === 'Industrial Land'){
                return true
            }
        })
        console.log(IndustrialLandData);


  return (
    <>
    <div className='card_main'>
        <div className='card_head'>
            <div className='card_head1'>
            <img src="https://www.xentice.com/static/media/commercial_space.cabcda3f.png" width={30} alt="" />
            <p>Commercial Shop</p>
            </div>
            <div className='card_head2'>
            <a href=""><p>Explore More</p></a>
            </div>
        </div>

        <div className='cards'>
            <div className='row__cards'>
                {/* {
                

                value.map((data)=>{
                    <div className='row__card'>
                        <img src="https://xenticebucket21.s3.ap-south-1.amazonaws.com/image/z4ir6Q7IfA1YEiEjGhEdYkdJIm8LqtvBJKlcvESq.jpg"
                        alt="" width={300} />
                        <div className='card_title'>
                            <p>Bone Avenue</p>
                            <FavoriteBorderIcon/>
                        </div>
                        <div className='card_title1'>
                            <LocationOnOutlinedIcon/>
                            <p>Cochin</p>
                        </div>
                        <p className='card_price'>Rs 5000/Sqr.ft</p>
                        <a href=""><p>Explore Now</p></a>
                    </div>
                })
                    
                } */}
                
                <div className='row__card'>
                    <img src="https://xenticebucket21.s3.ap-south-1.amazonaws.com/image/z4ir6Q7IfA1YEiEjGhEdYkdJIm8LqtvBJKlcvESq.jpg"
                    alt="" width={300} />
                    <div className='card_title'>
                        <p>Bone Avenue</p>
                        <FavoriteBorderIcon/>
                    </div>
                    <div className='card_title1'>
                        <LocationOnOutlinedIcon/>
                        <p>Cochin</p>
                    </div>
                    <p className='card_price'>Rs 5000/Sqr.ft</p>
                    <a href=""><p>Explore Now</p></a>
                </div>
                <div className='row__card'>
                    <img src="https://xenticebucket21.s3.ap-south-1.amazonaws.com/image/z4ir6Q7IfA1YEiEjGhEdYkdJIm8LqtvBJKlcvESq.jpg"
                    alt="" width={300} />
                    <div className='card_title'>
                        <p>Bone Avenue</p>
                        <FavoriteBorderIcon/>
                    </div>
                    <div className='card_title1'>
                        <LocationOnOutlinedIcon/>
                        <p>Cochin</p>
                    </div>
                    <p className='card_price'>Rs 5000/Sqr.ft</p>
                    <a href=""><p>Explore Now</p></a>
                </div>
                <div className='row__card'>
                    <img src="https://xenticebucket21.s3.ap-south-1.amazonaws.com/image/z4ir6Q7IfA1YEiEjGhEdYkdJIm8LqtvBJKlcvESq.jpg"
                    alt="" width={300} />
                    <div className='card_title'>
                        <p>Bone Avenue</p>
                        <FavoriteBorderIcon/>
                    </div>
                    <div className='card_title1'>
                        <LocationOnOutlinedIcon/>
                        <p>Cochin</p>
                    </div>
                    <p className='card_price'>Rs 5000/Sqr.ft</p>
                    <a href=""><p>Explore Now</p></a>
                </div>
                <div className='row__card'>
                    <img src="https://xenticebucket21.s3.ap-south-1.amazonaws.com/image/z4ir6Q7IfA1YEiEjGhEdYkdJIm8LqtvBJKlcvESq.jpg"
                    alt="" width={300} />
                    <div className='card_title'>
                        <p>Bone Avenue</p>
                        <FavoriteBorderIcon/>
                    </div>
                    <div className='card_title1'>
                        <LocationOnOutlinedIcon/>
                        <p>Cochin</p>
                    </div>
                    <p className='card_price'>Rs 5000/Sqr.ft</p>
                    <a href=""><p>Explore Now</p></a>
                </div>
                <div className='row__card'>
                    <img src="https://xenticebucket21.s3.ap-south-1.amazonaws.com/image/z4ir6Q7IfA1YEiEjGhEdYkdJIm8LqtvBJKlcvESq.jpg"
                    alt="" width={300} />
                    <div className='card_title'>
                        <p>Bone Avenue</p>
                        <FavoriteBorderIcon/>
                    </div>
                    <div className='card_title1'>
                        <LocationOnOutlinedIcon/>
                        <p>Cochin</p>
                    </div>
                    <p className='card_price'>Rs 5000/Sqr.ft</p>
                    <a href=""><p>Explore Now</p></a>
                </div>
                <div className='row__card'>
                    <img src="https://xenticebucket21.s3.ap-south-1.amazonaws.com/image/z4ir6Q7IfA1YEiEjGhEdYkdJIm8LqtvBJKlcvESq.jpg"
                    alt="" width={300} />
                    <div className='card_title'>
                        <p>Bone Avenue</p>
                        <FavoriteBorderIcon/>
                    </div>
                    <div className='card_title1'>
                        <LocationOnOutlinedIcon/>
                        <p>Cochin</p>
                    </div>
                    <p className='card_price'>Rs 5000/Sqr.ft</p>
                    <a href=""><p>Explore Now</p></a>
                </div>
                <div className='row__card'>
                    <img src="https://xenticebucket21.s3.ap-south-1.amazonaws.com/image/z4ir6Q7IfA1YEiEjGhEdYkdJIm8LqtvBJKlcvESq.jpg"
                    alt="" width={300} />
                    <div className='card_title'>
                        <p>Bone Avenue</p>
                        <FavoriteBorderIcon/>
                    </div>
                    <div className='card_title1'>
                        <LocationOnOutlinedIcon/>
                        <p>Cochin</p>
                    </div>
                    <p className='card_price'>Rs 5000/Sqr.ft</p>
                    <a href=""><p>Explore Now</p></a>
                </div>
                <div className='row__card'>
                    <img src="https://xenticebucket21.s3.ap-south-1.amazonaws.com/image/z4ir6Q7IfA1YEiEjGhEdYkdJIm8LqtvBJKlcvESq.jpg"
                    alt="" width={300} />
                    <div className='card_title'>
                        <p>Bone Avenue</p>
                        <FavoriteBorderIcon/>
                    </div>
                    <div className='card_title1'>
                        <LocationOnOutlinedIcon/>
                        <p>Cochin</p>
                    </div>
                    <p className='card_price'>Rs 5000/Sqr.ft</p>
                    <a href=""><p>Explore Now</p></a>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Card