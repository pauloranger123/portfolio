from django.shortcuts import render

def index(request):
    context = {
        'skills': [
            {'name': 'Python',               'level': 90, 'icon': '🐍'},
            {'name': 'IA / Machine Learning', 'level': 82, 'icon': '🤖'},
            {'name': 'SQL',                  'level': 80, 'icon': '🗄️'},
            {'name': 'API REST / Postman',   'level': 85, 'icon': '🔌'},
            {'name': 'Docker & Containers',  'level': 80, 'icon': '🐳'},
            {'name': 'Git & GitHub',         'level': 88, 'icon': '🐙'},
            {'name': 'Linux & Servidores',   'level': 78, 'icon': '🐧'},
            {'name': 'PHP',                  'level': 65, 'icon': '🐘'},
            {'name': 'Java',                 'level': 70, 'icon': '☕'},
        ],
        'projects': [
            {
                'title': 'Treinamento de IA com Imagens',
                'desc': 'Pipeline de treino e validação de modelos de visão computacional para classificação de imagens em ambiente de produção.',
                'tags': ['Python', 'Machine Learning', 'OpenCV', 'Docker'],
            },
            {
                'title': 'Treinamento de IA com Dados Tabulares',
                'desc': 'Modelos preditivos treinados com datasets reais, com análise exploratória, feature engineering e avaliação de métricas.',
                'tags': ['Python', 'Scikit-learn', 'Pandas', 'Docker'],
            },
            {
                'title': 'API REST — Endpoints com Postman',
                'desc': 'Criação, documentação e testes de endpoints RESTful, incluindo autenticação, validação e integração com banco de dados.',
                'tags': ['Postman', 'PHP', 'SQL'],
            },
            {
                'title': 'Infraestrutura com Docker & Linux',
                'desc': 'Containerização de aplicações e modelos de IA com Docker, deploy em servidores Linux remotos via SSH, transferência de arquivos e gerenciamento de ambientes isolados.',
                'tags': ['Docker', 'Linux', 'SSH', 'Git', 'Shell'],
            },
        ],
    }
    return render(request, 'core/index.html', context)
