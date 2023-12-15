import React from 'react';
import { useState } from 'react';

export function AboutUs() {
    const [employees, setEmployees] = useState([
        {
            name: 'John Doe',
            position: 'CEO',
            image: 'https://blog.hubspot.com/hs-fs/hubfs/employee-retention-rate.jpg?width=595&height=400&name=employee-retention-rate.jpg',
        },
        {
            name: 'Jane Doe',
            position: 'CTO',
            image: 'https://assets.website-files.com/611648b6262a801811180f6c/622a840a298a8bda4133dba2_Untitled%20design%20(7)%20(2).png',
        },
        {
            name: 'Maria Gonzalez',
            position: 'Director of Sales',
            image: 'https://source.unsplash.com/random',
        },
        {
            name: 'Juan Perez',
            position: 'Software Engineer',
            image: 'https://source.unsplash.com/random',
        },
        {
            name: 'Ana Lopez',
            position: 'Customer Support Representative',
            image: 'https://source.unsplash.com/random',
        },
        {
            name: 'Pedro Martinez',
            position: 'Marketing Manager',
            image: 'https://source.unsplash.com/random',
        },
        {
            name: 'Sofia Garcia',
            position: 'Accountant',
            image: 'https://source.unsplash.com/random',
        },
        {
            name: 'Luis Rodriguez',
            position: 'Designer',
            image: 'https://source.unsplash.com/random',
        },
    ]);

    return (
        <div className="container mx-auto py-14 bg-white shadow">
            <h1 className="text-5xl text-center font-bold mb-10">Acerca de nosotros</h1>
            <p className="text-lg mt-4 text-justify mx-32">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus auctor mauris id lectus scelerisque, vel ullamcorper sapien scelerisque. Praesent eget lacinia mauris, vel vehicula ipsum. Nullam eget convallis leo, id iaculis turpis.
            </p>

            <div className="py-6">
                <h2 className="text-3xl text-center font-bold mt-10">Quiénes somos</h2>
            </div>

            <div className="flex flex-wrap justify-center items-center mb-10">
                {employees.map((employee) => (
                    <div key={employee.name} className="col-span-1 rounded-lg shadow-lg m-5">
                        <div className="mb-4">
                            <img src={employee.image} alt={employee.name} className="w-[400px] h-[250px]" />
                        </div>
                        <h2 className="text-3xl text-center font-bold">{employee.name}</h2>
                        <p className="text-xl text-center mb-5">{employee.position}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
