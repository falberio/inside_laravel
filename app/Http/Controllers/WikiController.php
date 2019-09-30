<?php

namespace App\Http\Controllers;

use App\Article;
use Illuminate\Http\Request;

class WikiController extends Controller
{
    public function show()
    {
    	$articles = Article::all()->sortByDesc('updated_at');
		return view('pages.wiki', ['articles' => $articles]);	
    }

    public function showArticle($id)
    {
    	$article = Article::find($id);
		return view('pages.article', ['article' => $article]);	
    }

    
}
