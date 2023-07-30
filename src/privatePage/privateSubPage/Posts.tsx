import React, { useEffect } from 'react';
import { getAllPostAsyncAxios } from '../../RTK/postRTK/postAsyncThunk';
import { useAppDispatch, useAppSelector } from '../../RTK/store';
import { PostParam } from '../../RTK/postRTK/postAsyncThunk';

const postLoading = () => {
    const divLoadingTagn: JSX.Element =   <div className="flex items-center justify-between">
                                <div>
                                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                                    <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                                </div>
                                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
                            </div>;
    
    const loadingArray: JSX.Element[] | undefined = Array<JSX.Element>(18).fill(divLoadingTagn); 
    
    return(        
        <div role="status" className="w-full p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700">
            {loadingArray}
            <span className="sr-only">Loading...</span>
        </div>
    )
}

const postContentView = (postData : PostParam) => {
    return (
        <li key={postData.uid} className='border-b-4'>
            <div className="flex items-center justify-between">
                <div>
                    <div className="text-4xl mb-2">{postData.title}</div>
                    <div className="font-['Open_Sans'] text-3xl">{postData.contents}</div>
                </div>
                <div className="">{postData.status}</div>
            </div>
        </li>
    );
}

export default function Posts(){
    const dispatch = useAppDispatch();

    const { loading, complete, data, error, message } = useAppSelector(state => state.post);

    const postItemLi = data?.map(v => postContentView(v));
    useEffect(() => {
        dispatch(getAllPostAsyncAxios(null));
      }, []);

    return(
        <div className='h-51rm p-2.5 overflow-y-auto box-content'>
            <ul>
                {loading ? postLoading() : complete ? postItemLi : <div> {message} </div>}
            </ul>
        </div>
    )
}