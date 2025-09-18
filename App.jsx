import React, { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Mail, Phone, Globe, CheckCircle, TrendingUp, Calculator, BarChart3, Users, Clock, Target, Menu, X } from 'lucide-react'
import larsLogo from './assets/lars_logo.png'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    empresa: '',
    servico: '',
    mensagem: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')

    // Validação básica
    if (!formData.nome || !formData.email || !formData.mensagem) {
      setSubmitMessage('Por favor, preencha todos os campos obrigatórios.')
      setIsSubmitting(false)
      return
    }

    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setSubmitMessage('Por favor, insira um email válido.')
      setIsSubmitting(false)
      return
    }

    // Simular envio do formulário
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      setSubmitMessage('Mensagem enviada com sucesso! Entraremos em contato em breve.')
      setFormData({
        nome: '',
        email: '',
        empresa: '',
        servico: '',
        mensagem: ''
      })
    } catch (error) {
      setSubmitMessage('Erro ao enviar mensagem. Tente novamente.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <img src={larsLogo} alt="Lars Consultoria" className="h-12 w-auto" />
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('inicio')} className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
                Início
              </button>
              <button onClick={() => scrollToSection('sobre')} className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
                Quem Somos
              </button>
              <button onClick={() => scrollToSection('servicos')} className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
                Serviços
              </button>
              <button onClick={() => scrollToSection('beneficios')} className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
                Benefícios
              </button>
              <button onClick={() => scrollToSection('modelos')} className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
                Modelos de Trabalho
              </button>
              <button onClick={() => scrollToSection('contato')} className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
                Contato
              </button>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <nav className="flex flex-col space-y-4">
                <button onClick={() => scrollToSection('inicio')} className="text-left text-gray-700 hover:text-gray-900 font-medium">
                  Início
                </button>
                <button onClick={() => scrollToSection('sobre')} className="text-left text-gray-700 hover:text-gray-900 font-medium">
                  Quem Somos
                </button>
                <button onClick={() => scrollToSection('servicos')} className="text-left text-gray-700 hover:text-gray-900 font-medium">
                  Serviços
                </button>
                <button onClick={() => scrollToSection('beneficios')} className="text-left text-gray-700 hover:text-gray-900 font-medium">
                  Benefícios
                </button>
                <button onClick={() => scrollToSection('modelos')} className="text-left text-gray-700 hover:text-gray-900 font-medium">
                  Modelos de Trabalho
                </button>
                <button onClick={() => scrollToSection('contato')} className="text-left text-gray-700 hover:text-gray-900 font-medium">
                  Contato
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <img src={larsLogo} alt="Lars Consultoria" className="h-24 w-auto mx-auto mb-8" />
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Lars Consultoria
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Especialistas em Otimização de Processos Administrativos e Financeiros, Impulsionando a Eficiência através do Excel
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => scrollToSection('servicos')} 
                className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 text-lg"
              >
                Nossos Serviços
              </Button>
              <Button 
                onClick={() => scrollToSection('contato')} 
                variant="outline" 
                className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-3 text-lg"
              >
                Entre em Contato
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quem Somos */}
      <section id="sobre" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Quem Somos</h2>
            <div className="w-24 h-1 bg-gray-900 mx-auto mb-8"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 md:p-12">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  A Lars Consultoria é especialista na otimização de processos administrativos e financeiros, 
                  impulsionando soluções estratégicas com o poder de planilhas Excel personalizadas. Nosso 
                  compromisso é simplificar sua gestão, elevando a eficiência e o potencial de crescimento do seu negócio.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed text-center">
                  Com uma equipe de especialistas experientes e dedicados, transformamos desafios complexos em 
                  soluções ágeis, acessíveis e de alto impacto. Na Lars Consultoria, cremos que a tecnologia, 
                  quando estrategicamente aplicada, torna-se um pilar fundamental para o crescimento sustentável, 
                  capacitando sua empresa a ascender a novos patamares de produtividade, controle financeiro e 
                  inteligência de negócios.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Serviços Oferecidos</h2>
            <div className="w-24 h-1 bg-gray-900 mx-auto mb-8"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Calculator className="h-12 w-12 text-gray-900 mb-4" />
                <CardTitle>Planilhas Personalizadas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Criamos ferramentas customizadas como Fluxo de Caixa, DRE e Controle de Estoque, 
                  perfeitamente alinhadas às suas demandas exclusivas, para uma gestão precisa e eficaz.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Target className="h-12 w-12 text-gray-900 mb-4" />
                <CardTitle>Diagnóstico de Processos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Realizamos um diagnóstico aprofundado e reestruturamos seus processos administrativos, 
                  eliminando gargalos e elevando significativamente a produtividade da sua operação.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <BarChart3 className="h-12 w-12 text-gray-900 mb-4" />
                <CardTitle>Dashboards e Relatórios</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Desenvolvemos dashboards intuitivos e relatórios financeiros cristalinos, proporcionando 
                  uma visão estratégica e facilitando decisões informadas para o crescimento do seu negócio.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-gray-900 mb-4" />
                <CardTitle>Automatização Avançada</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Implementamos fórmulas avançadas, tabelas dinâmicas e macros para automatizar tarefas repetitivas, 
                  minimizando erros e liberando sua equipe para focar no que realmente importa.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-gray-900 mb-4" />
                <CardTitle>Treinamentos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Oferecemos treinamentos e workshops personalizados para capacitar sua equipe no uso pleno do Excel, 
                  assegurando a máxima performance das ferramentas implementadas e o domínio da gestão.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Clock className="h-12 w-12 text-gray-900 mb-4" />
                <CardTitle>Consultoria Recorrente</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Disponibilizamos acompanhamento mensal e suporte contínuo, garantindo a evolução constante 
                  e a sustentabilidade das melhorias implementadas em seu ambiente de trabalho.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section id="beneficios" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Benefícios para sua Empresa</h2>
            <div className="w-24 h-1 bg-gray-900 mx-auto mb-8"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex items-start space-x-4">
              <CheckCircle className="h-8 w-8 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Maior Organização</h3>
                <p className="text-gray-600">Processos estruturados e organizados para melhor controle do seu negócio.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="h-8 w-8 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Economia de Tempo</h3>
                <p className="text-gray-600">Redução significativa de tempo gasto em tarefas administrativas e redução de erros.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="h-8 w-8 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Clareza Financeira</h3>
                <p className="text-gray-600">Visão clara e precisa da situação financeira para tomada de decisões estratégicas.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="h-8 w-8 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Soluções Sob Medida</h3>
                <p className="text-gray-600">Ferramentas personalizadas sem necessidade de investir em sistemas caros.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 md:col-span-2 justify-center">
              <CheckCircle className="h-8 w-8 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Suporte Contínuo</h3>
                <p className="text-gray-600">Acompanhamento próximo e suporte especializado sempre que precisar.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modelos de Trabalho */}
      <section id="modelos" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Modelos de Trabalho</h2>
            <div className="w-24 h-1 bg-gray-900 mx-auto mb-8"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl mb-4">Projetos Avulsos</CardTitle>
                <Badge variant="outline" className="mx-auto">Sob Demanda</Badge>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-6">
                  Desenvolvimento de planilhas e processos específicos conforme sua necessidade pontual.
                </p>
                <Button 
                  onClick={() => scrollToSection('contato')} 
                  variant="outline" 
                  className="w-full"
                >
                  Solicitar Orçamento
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-2 border-gray-900">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl mb-4">Consultoria Mensal</CardTitle>
                <Badge className="mx-auto bg-gray-900">Recomendado</Badge>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-6">
                  Acompanhamento contínuo com suporte especializado e melhorias constantes.
                </p>
                <Button 
                  onClick={() => scrollToSection('contato')} 
                  className="w-full bg-gray-900 hover:bg-gray-800"
                >
                  Saiba Mais
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl mb-4">Treinamentos</CardTitle>
                <Badge variant="outline" className="mx-auto">Capacitação</Badge>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-6">
                  Capacitação completa da sua equipe para uso eficiente e avançado do Excel.
                </p>
                <Button 
                  onClick={() => scrollToSection('contato')} 
                  variant="outline" 
                  className="w-full"
                >
                  Agendar Treinamento
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Entre em Contato</h2>
            <div className="w-24 h-1 bg-gray-900 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Transforme a gestão do seu negócio com a Lars Consultoria. Entre em contato conosco e descubra como podemos ajudar.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Informações de Contato */}
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="bg-gray-900 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">c.laertel@me.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-gray-900 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Telefone</h3>
                  <p className="text-gray-600">(11) 9.4212-4463</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-gray-900 p-3 rounded-full">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Website</h3>
                  <p className="text-gray-600">www.larsconsultoria.com</p>
                </div>
              </div>
            </div>

            {/* Formulário de Contato */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Solicite um Orçamento</CardTitle>
                <CardDescription>
                  Preencha o formulário abaixo e entraremos em contato em breve.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      value={formData.nome}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                      placeholder="Seu nome completo"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                      placeholder="seu@email.com"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="empresa" className="block text-sm font-medium text-gray-700 mb-1">
                      Empresa
                    </label>
                    <input
                      type="text"
                      id="empresa"
                      name="empresa"
                      value={formData.empresa}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                      placeholder="Nome da sua empresa"
                    />
                  </div>

                  <div>
                    <label htmlFor="servico" className="block text-sm font-medium text-gray-700 mb-1">
                      Serviço de Interesse
                    </label>
                    <select
                      id="servico"
                      name="servico"
                      value={formData.servico}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    >
                      <option value="">Selecione um serviço</option>
                      <option value="planilhas">Planilhas Personalizadas</option>
                      <option value="consultoria">Consultoria Mensal</option>
                      <option value="treinamento">Treinamentos</option>
                      <option value="diagnostico">Diagnóstico de Processos</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-1">
                      Mensagem *
                    </label>
                    <textarea
                      id="mensagem"
                      name="mensagem"
                      value={formData.mensagem}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                      placeholder="Descreva suas necessidades ou dúvidas..."
                      required
                    ></textarea>
                  </div>

                  {submitMessage && (
                    <div className={`p-3 rounded-md text-sm ${
                      submitMessage.includes('sucesso') 
                        ? 'bg-green-100 text-green-700 border border-green-300' 
                        : 'bg-red-100 text-red-700 border border-red-300'
                    }`}>
                      {submitMessage}
                    </div>
                  )}

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gray-900 hover:bg-gray-800 disabled:opacity-50"
                  >
                    {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <img src={larsLogo} alt="Lars Consultoria" className="h-16 w-auto mx-auto mb-6 filter invert" />
            <h3 className="text-2xl font-bold mb-4">Lars Consultoria</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Especialistas em Otimização de Processos Administrativos e Financeiros, Impulsionando a Eficiência através do Excel
            </p>
            <div className="flex justify-center space-x-8 mb-8">
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5" />
                <span>c.laertel@me.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>(11) 9.4212-4463</span>
              </div>
            </div>
            <div className="border-t border-gray-700 pt-8">
              <p className="text-gray-400">
                © 2024 Lars Consultoria. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

