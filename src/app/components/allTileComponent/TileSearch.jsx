// 'use client'
import React from 'react';
import { Label, SearchField } from "@heroui/react";


const TileSearch = ({query, setQuery}) => {
    return (
        <div>
            <SearchField name="search">
                <Label className='text-2xl font-bold text-blue-500'>Search Tiles</Label>
                <SearchField.Group className={'border border-gray-400'}>
                    <SearchField.SearchIcon />
                    <SearchField.Input className="w-70"
                        type='text'
                        value={query}
                        onChange={(e)=>setQuery(e.target.value)}
                        placeholder="Search Tiles by title" />
                    <SearchField.ClearButton />
                </SearchField.Group>
            </SearchField>
        </div>
    );
};

export default TileSearch;

