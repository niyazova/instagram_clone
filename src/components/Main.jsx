import {useState} from 'react';
import {AiOutlineHeart} from 'react-icons/ai';
import {FcLike} from 'react-icons/fc'
import {FaRegComment} from 'react-icons/fa';
import {FiSend} from 'react-icons/fi';
import {BiLabel} from 'react-icons/bi';
import '../components/main.css';
import baby from '../assets/baby-4962875__340.webp';
import Comments from './Comments';



const users = [
    {
       image:'https://cdn.pixabay.com/photo/2018/05/22/14/00/girl-3421489__340.jpg',
        name: 'khilola'
    },
    {
        image:'https://cdn.pixabay.com/photo/2017/08/01/08/29/woman-2563491__340.jpg',
         name: '_lily'
     },
     {
        image:'https://cdn.pixabay.com/photo/2018/01/29/17/01/woman-3116587__340.jpg',
        name: 'amanda'
     },
     {
        image:'https://cdn.pixabay.com/photo/2018/06/18/02/03/woman-3481756__340.jpg',
         name: 'princess'
     },
     {
        image:'https://cdn.pixabay.com/photo/2021/06/22/14/55/girl-6356393_960_720.jpg',
         name: 'lady'
     },
     {
        image:'https://cdn.pixabay.com/photo/2016/11/29/03/36/woman-1867093__340.jpg',
         name: 'melek'
     },
     {
        image:'https://cdn.pixabay.com/photo/2013/07/13/12/43/kids-160168__340.png',
         name: 'bella'
     },
     {
        image:'https://cdn.pixabay.com/photo/2017/08/01/08/29/woman-2563491__340.jpg',
         name: '_lily'
     },
     {
        image:'https://cdn.pixabay.com/photo/2013/07/13/12/43/kids-160168__340.png',
         name: 'bella'
     },
     {
        image:'https://cdn.pixabay.com/photo/2017/08/01/08/29/woman-2563491__340.jpg',
         name: '_lily'
     },
     {
        image:'https://cdn.pixabay.com/photo/2018/06/18/02/03/woman-3481756__340.jpg',
         name: 'princess'
     },
     {
        image:'https://cdn.pixabay.com/photo/2021/06/22/14/55/girl-6356393_960_720.jpg',
         name: 'lady'
     },
     {
        image:'https://cdn.pixabay.com/photo/2018/05/22/14/00/girl-3421489__340.jpg',
         name: 'khilola'
     },
     {
         image:'https://cdn.pixabay.com/photo/2017/08/01/08/29/woman-2563491__340.jpg',
          name: '_lily'
      },
      {
         image:'https://cdn.pixabay.com/photo/2018/01/29/17/01/woman-3116587__340.jpg',
         name: 'amanda'
      },
]


const posts = [
    {
        id:'1',
        user_name: 'lady',
        user_img: 'https://cdn.pixabay.com/photo/2021/06/22/14/55/girl-6356393_960_720.jpg',
        poster_img: 'https://cdn.pixabay.com/photo/2019/05/30/00/46/pion-4238892__480.jpg',
        isLike: false,
        description: 'Happy New Year',
        like_count: 120,
        comments: [
            {
                user: '',
                msg: ''
            }
        ]
    },
    {
        id:'2',
        user_name: 'amanda',
        user_img: 'https://cdn.pixabay.com/photo/2021/06/22/14/55/girl-6356393_960_720.jpg',
        poster_img: 'https://cdn.pixabay.com/photo/2019/05/30/00/46/pion-4238892__480.jpg',
        isLike: true,
        description: 'Happy New Year',
        like_count: 120,
        comments: [
            {
                user: '',
                msg: ''
            }
        ]
    },
    {
        id:'3',
        user_name: 'princess',
        user_img: 'https://cdn.pixabay.com/photo/2021/06/22/14/55/girl-6356393_960_720.jpg',
        poster_img: 'https://cdn.pixabay.com/photo/2019/05/30/00/46/pion-4238892__480.jpg',
        isLike: false,
        description: 'Happy New Year',
        like_count: 120,
        comments: [
            {
                user: '',
                msg: ''
            }
        ]
    },
    {
        id:'4',
        user_name: '_lily',
        user_img: 'https://cdn.pixabay.com/photo/2021/06/22/14/55/girl-6356393_960_720.jpg',
        poster_img: 'https://cdn.pixabay.com/photo/2019/05/30/00/46/pion-4238892__480.jpg',
        isLike: false,
        description: 'Happy New Year',
        like_count: 120,
        comments: [
            {
                user: '',
                msg: ''
            }
        ]
    },
    {   id:'5',
        user_name: 'melek',
        user_img: 'https://cdn.pixabay.com/photo/2021/06/22/14/55/girl-6356393_960_720.jpg',
        poster_img: 'https://cdn.pixabay.com/photo/2019/05/30/00/46/pion-4238892__480.jpg',
        isLike: false,
        description: 'Happy New Year',
        like_count: 120,
        comments: [
            {
                user: '',
                msg: ''
            }
        ]
    },
    {   id:'6',
    user_name: 'bella',
    user_img: 'https://cdn.pixabay.com/photo/2021/06/22/14/55/girl-6356393_960_720.jpg',
    poster_img: 'https://cdn.pixabay.com/photo/2019/05/30/00/46/pion-4238892__480.jpg',
    isLike: false,
    description: 'Happy New Year',
    like_count: 120,
    comments: [
        {
            user_img: '',
            user: '',
            msg: ''
        }
    ]
},
]





function Main() {

    // const [isLike, setIsLike] = useState(false);
    const [data, setData] = useState(users)
    const [post, setPost] = useState(posts)

    const likeHandler = (id) => {
        console.log(id)
        const updated = post.map(item => item.id === id ? {...item, isLike: !item.isLike}: item);
        setPost(updated)
    };

    return (
       <main>
           <div className="main__left">
                <div className="main__top">
                    {data.map((item, key) => (
                        <div className="main__top--box">
                            <img src={item.image} alt="smth" />
                            <p>{item.name}</p>
                        </div>
                       )
                    )}
                </div>
                <div className="main__bottom">
                   {
                       post.map(item => (
                           <>
                                <div className="top-box">
                                    <div>
                                        <img  src={item.user_img} alt="smth" />
                                        <p>{item.user_name}</p>
                                    </div>
                                    <p>...</p>
                                </div>
                                <div className="middle-box">
                                    <img src='https://cdn.pixabay.com/photo/2018/05/22/14/00/girl-3421489__340.jpg' alt="#" />
                                </div>
                                <div className="bottom-box">
                                    <div>
                                        <div onClick={() => likeHandler(item.id)}>
                                            {item.isLike ? <FcLike />: <AiOutlineHeart />}
                                        </div>
                                        <div>
                                            <FaRegComment />
                                        </div>
                                        <div>
                                            <FiSend />
                                        </div>
                                    </div>
                                    <BiLabel />
                                </div>
                                <p>Просмотры:175</p>
                           </>
                       ))
                   }
                </div>
           </div>
           <div className="main__right">
                <div className="main__right--box">
                    <img src={baby} alt="" />
                    <div className="right-box">
                        <h5 className='box-title'>__lily</h5>
                        <p className='box-subtitle'>loveyorself</p>
                    </div>
                </div>
                <p>Рекомендации для вас</p>
                <div className="main__right--box">
                    <img src="https://cdn.pixabay.com/photo/2018/01/29/17/01/woman-3116587__340.jpg" alt="" />
                    <div className="right-box">
                        <h5 className='box-title'>amanda</h5>
                        <p className='box-subtitle'>alhamdulillah for everything</p>
                    </div>
                    <p className='follow'>follow</p>
                </div>
                <div className="main__right--box">
                    <img src="https://cdn.pixabay.com/photo/2017/08/01/08/29/woman-2563491__340.jpg" alt="" />
                    <div className="right-box">
                        <h5 className='box-title'>bella</h5>
                        <p className='box-subtitle'>dreams come true</p>
                    </div>
                    <p className='follow'>follow</p>
                </div>
                <div className="main__right--box">
                    <img src="https://cdn.pixabay.com/photo/2021/06/22/14/55/girl-6356393_960_720.jpg" alt="" />
                    <div className="right-box">
                        <h5 className='box-title'>selena gomes</h5>
                        <p className='box-subtitle'>selena____gomes</p>
                    </div>
                    <p className='follow'>follow</p>
                </div>
                <div className="main__right--box">
                    <img src="https://cdn.pixabay.com/photo/2013/07/13/12/43/kids-160168__340.png" alt="" />
                    <div className="right-box">
                        <h5 className='box-title'>kids</h5>
                        <p className='box-subtitle'>for_kids_shop</p>
                    </div>
                    <p className='follow'>follow</p>
                </div>
           </div>
       </main>
    )
}

export default Main;
