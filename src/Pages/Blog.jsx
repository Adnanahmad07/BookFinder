import React from 'react';

const Blog = () => {
    const blogs = [
        {
            id: 1,
            image: 'https://via.placeholder.com/800x400',
            title: 'The Future of Technology',
            content: 'Lorem ipsum dolor sit, hihi amet consectetur adipisicing elit. Libero delectus dolore eos! Ipsa quis ullam nihil. Dignissimos, voluptatum quaerat! Laboriosam vitae delectus eum quod earum enim asperiores minus ad ratione?Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quisquam, enim neque odit deserunt unde quod dolores excepturi adipisci veritatis vitae amet beatae perferendis dolorum dignissimos! Quibusdam nesciunt debitis temporibus!Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, provident culpa? Cumque labore ipsa nostrum sequi quisquam molestiae voluptate deserunt sapiente. Totam accusamus reiciendis, cumque nostrum odio consectetur nemo asperiores. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint fuga fugit quas iure quae mollitia velit perferendis architecto non laboriosam cumque, commodi labore nulla rem modi nesciunt asperiores et aperiam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, deserunt dolor! Recusandae iure, culpa exercitationem quam labore eius sed quasi neque libero voluptatem dolore dolor ab. Vitae nisi maxime a.',
        },
        {
            id: 2,
            image: 'https://via.placeholder.com/800x400',
            title: 'The Importance of Cybersecurity',
            content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero delectus dolore eos! Ipsa quis ullam nihil. Dignissimos, voluptatum quaerat! Laboriosam vitae delectus eum quod earum enim asperiores minus ad ratione?Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quisquam, enim neque odit deserunt unde quod dolores excepturi adipisci veritatis vitae amet beatae perferendis dolorum dignissimos! Quibusdam nesciunt debitis temporibus!Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, provident culpa? Cumque labore ipsa nostrum sequi quisquam molestiae voluptate deserunt sapiente. Totam accusamus reiciendis, cumque nostrum odio consectetur nemo asperiores. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint fuga fugit quas iure quae mollitia velit perferendis architecto non laboriosam cumque, commodi labore nulla rem modi nesciunt asperiores et aperiam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, deserunt dolor! Recusandae iure, culpa exercitationem quam labore eius sed quasi neque libero voluptatem dolore dolor ab. Vitae nisi maxime a.',
        },
        {
            id: 3,
            image: 'https://via.placeholder.com/800x400',
            title: 'The Rise of Remote Work',
            content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero delectus dolore eos! Ipsa quis ullam nihil. Dignissimos, voluptatum quaerat! Laboriosam vitae delectus eum quod earum enim asperiores minus ad ratione?Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quisquam, enim neque odit deserunt unde quod dolores excepturi adipisci veritatis vitae amet beatae perferendis dolorum dignissimos! Quibusdam nesciunt debitis temporibus!Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, provident culpa? Cumque labore ipsa nostrum sequi quisquam molestiae voluptate deserunt sapiente. Totam accusamus reiciendis, cumque nostrum odio consectetur nemo asperiores. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint fuga fugit quas iure quae mollitia velit perferendis architecto non laboriosam cumque, commodi labore nulla rem modi nesciunt asperiores et aperiam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, deserunt dolor! Recusandae iure, culpa exercitationem quam labore eius sed quasi neque libero voluptatem dolore dolor ab. Vitae nisi maxime a.',
        },
        {
            id: 4,
            image: 'https://via.placeholder.com/800x400',
            title: 'The Future of Education',
            content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero delectus dolore eos! Ipsa quis ullam nihil. Dignissimos, voluptatum quaerat! Laboriosam vitae delectus eum quod earum enim asperiores minus ad ratione?Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quisquam, enim neque odit deserunt unde quod dolores excepturi adipisci veritatis vitae amet beatae perferendis dolorum dignissimos! Quibusdam nesciunt debitis temporibus!Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, provident culpa? Cumque labore ipsa nostrum sequi quisquam molestiae voluptate deserunt sapiente. Totam accusamus reiciendis, cumque nostrum odio consectetur nemo asperiores. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint fuga fugit quas iure quae mollitia velit perferendis architecto non laboriosam cumque, commodi labore nulla rem modi nesciunt asperiores et aperiam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, deserunt dolor! Recusandae iure, culpa exercitationem quam labore eius sed quasi neque libero voluptatem dolore dolor ab. Vitae nisi maxime a.',
        },
    ];

    return (
        <div className='bg-neutral-50 dark:bg-neutral-950 dark:text-neutral-200 py-24'>


            <div
                className='max-w-[800px] mx-auto'
            >{blogs.map((item, index) => (
                <div
                    key={index}
                    className='border-b border-gray-500 py-5'
                >
                    <img
                        src={item.image}
                        alt="Image"
                        className=' drop-shadow-xl shadow-inner'
                    />
                    <h2 className='font-bold text-3xl my-4'>{item.title}</h2>
                    <p>{item.content}</p>


                </div>
            ))}

            </div>

        </div>
    );
};

export default Blog;
