<?php

namespace App\Controller;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class TelaLoginController extends Controller
{
    /**
     * @Route("/tela/login", name="tela_login")
     */
    public function index()
    {
        return $this->render('tela_login/index.html.twig', [
            'controller_name' => 'TelaLoginController',
        ]);
    }
}
