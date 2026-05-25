import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWikipediaW, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faPlay, faBan } from '@fortawesome/free-solid-svg-icons';
import { EffectCards, Keyboard } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import emulators from './emulators';
import { formatOrdinal } from './utils';

import "swiper/css";
import "swiper/css/effect-cards";

const Card = ({ name, developer, year, generation, path, picture, github, wikipedia }) => (
    <div className="flex flex-col rounded border overflow-hidden divide-y bg-white">
        <img className="h-32 w-full object-contain" src={picture} alt={name} />
        <div className="p-2 flex-1 flex items-center gap-2">
            <div className="flex-1">
                <h1 className="flex gap-2">
                    <Link to={path} className="flex-1 text-green-700 font-bold font-mono">
                        {name}
                    </Link>
                </h1>
                <p className="text-gray-500">
                    <b>{developer}</b>, {year}
                    {Number.isInteger(generation) && ` (${formatOrdinal(generation)} generation)`}.
                </p>
            </div>
            <div className="flex gap-2">
                {github && (
                    <a href={github} target={`${name}:github`} className="transition hover:text-green-700">
                        <FontAwesomeIcon icon={faGithub} className="fill-current"/>
                    </a>
                )}
                {wikipedia && (
                    <a href={wikipedia} target={`${name}:wikipedia`} className="transition hover:text-green-700">
                        <FontAwesomeIcon icon={faWikipediaW} className="fill-current"/>
                    </a>
                )}
            </div>
        </div>
        {github ? (
            <Link to={path} className="p-2 flex items-center justify-center gap-2 transition bg-green-700 hover:bg-green-500 text-white">
                <FontAwesomeIcon icon={faPlay} className="w-4 h-4" />
                PLAY
            </Link>
        ): (
            <button className="w-full p-2 flex items-center justify-center gap-2 bg-gray-200 text-white cursor-not-allowed">
                <FontAwesomeIcon icon={faBan} className="w-4 h-4" />
                Unavailable
            </button>
        )}
    </div>
);

export const List = () => (
    <main className="flex-1 flex flex-col justify-center items-center">
        <Swiper
            className="w-64 h-96"
            modules={[EffectCards, Keyboard]}
            effect="cards"
            grabCursor
            loop
            keyboard
        >
            {emulators.slice().sort((a, b) => (b.github - a.github) || (a.year - b.year) || a.name.localeCompare(b.name)).map((emulator) => (
                <SwiperSlide key={emulator.name} className="flex flex-col rounded bg-white text-xl">
                    <div className="p-2 flex gap-2">
                        <h1 className="flex-1 text-green-700 font-bold font-mono ">
                            {emulator.name}
                        </h1>
                        {emulator.github && (
                            <a href={emulator.github} target={`${emulator.name}:github`} className="transition hover:text-green-700">
                                <FontAwesomeIcon icon={faGithub} className="fill-current"/>
                            </a>
                        )}
                        {emulator.wikipedia && (
                            <a href={emulator.wikipedia} target={`${emulator.name}:wikipedia`} className="transition hover:text-green-700">
                                <FontAwesomeIcon icon={faWikipediaW} className="fill-current"/>
                            </a>
                        )}
                    </div>
                    <img className="h-32 w-full object-contain" src={emulator.picture} alt={emulator.name} />
                    <div className="p-2 flex-1">
                        <p className="text-gray-500">
                            <b>{emulator.developer}</b>, {emulator.year}
                            {Number.isInteger(emulator.generation) && ` (${formatOrdinal(emulator.generation)} generation)`}.
                        </p>
                    </div>
                    {emulator.github ? (
                        <Link to={emulator.path} className="p-2 flex items-center justify-center gap-2 transition bg-green-700 hover:bg-green-500 text-white">
                            <FontAwesomeIcon icon={faPlay} className="w-4 h-4" />
                            PLAY
                        </Link>
                    ): (
                        <button className="w-full p-2 flex items-center justify-center gap-2 bg-gray-200 text-white cursor-not-allowed">
                            <FontAwesomeIcon icon={faBan} className="w-4 h-4" />
                            Unavailable
                        </button>
                    )}
                </SwiperSlide>
            ))}
        </Swiper>
        {/* <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {emulators.slice().sort((a, b) => (b.year - a.year) || a.name.localeCompare(b.name)).map((emulator) => (
                <Card key={emulator.name} {...emulator} />
            ))}
        </div> */}
    </main>
);
