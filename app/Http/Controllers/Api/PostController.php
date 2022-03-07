<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Post;

class PostController extends Controller
{
    public function index() {
        $posts = Post::paginate(6);

        return response()->json([
        'success' => true,
        'results' => $posts
        ]);
    }
    
    public function show($slug) {
        $post = Post::where('slug', '=', $slug)->with(['category', 'tags'])->first();
        if($post) {
            return response()->json([
                'success' => true,
                'results' => $post
            ]);
        } else {
            return response()->json([
                'success' => false,
                'results' => [] 
            ]);
        }
    }
}
