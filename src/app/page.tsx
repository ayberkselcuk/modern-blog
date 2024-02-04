'use client'
import CardSection from "@/components/CardSection";
import { useEffect, useState } from 'react';

interface RMTypes {
  image: string;
  name: string;
  status: string;
  species: string;
  gender: string;
  origin: string;
  id: number;
}

export default function App() {
  const [data, setData] = useState<RMTypes[]>([]); // datayı başlangıçta boş bir dize olarak başlatır ve map'in doğru çalışmasını sağlar.
  const getData = async () => {
    const resp = await fetch('https://api.sampleapis.com/rickandmorty/characters');
    const json = await resp.json();
    setData(json);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex flex-col bg-white">
      <h1 className="text-black text-center text-5xl my-4 font-bold font-serif">Rick And Morty</h1>
      <div className="flex flex-row flex-wrap justify-center">
        {data.map((rickandmorty) => (
          <CardSection
            key={rickandmorty.id}
            name={rickandmorty.name}
            status={rickandmorty.status}
            species={rickandmorty.species}
            image={rickandmorty.image}
            gender={rickandmorty.gender}
            origin={rickandmorty.origin}
          />
        ))}
      </div>
    </div>
  )
}