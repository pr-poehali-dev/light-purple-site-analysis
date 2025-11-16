import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Спасибо за обращение!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">Faberlic</h1>
            <div className="hidden md:flex gap-8">
              <button onClick={() => scrollToSection("hero")} className="text-foreground hover:text-primary transition-colors">
                Главная
              </button>
              <button onClick={() => scrollToSection("benefits")} className="text-foreground hover:text-primary transition-colors">
                Преимущества
              </button>
              <button onClick={() => scrollToSection("opportunities")} className="text-foreground hover:text-primary transition-colors">
                Возможности
              </button>
              <button onClick={() => scrollToSection("contact")} className="text-foreground hover:text-primary transition-colors">
                Контакты
              </button>
            </div>
            <Button onClick={() => scrollToSection("contact")} className="hidden md:block">
              Связаться
            </Button>
          </nav>
        </div>
      </header>

      <section id="hero" className="pt-32 pb-20 px-4 bg-gradient-to-br from-secondary via-background to-accent">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
                Начни свой путь к успеху
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Присоединяйся к крупнейшей команде Faberlic и открой для себя безграничные возможности развития и заработка
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 py-6" onClick={() => scrollToSection("contact")}>
                  Начать сейчас
                  <Icon name="ArrowRight" className="ml-2" size={20} />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6" onClick={() => scrollToSection("opportunities")}>
                  Узнать больше
                </Button>
              </div>
              <div className="mt-12 grid grid-cols-3 gap-6">
                <div className="text-center animate-scale-in">
                  <div className="text-3xl font-bold text-primary">10+</div>
                  <div className="text-sm text-muted-foreground">Лет опыта</div>
                </div>
                <div className="text-center animate-scale-in" style={{ animationDelay: "0.1s" }}>
                  <div className="text-3xl font-bold text-primary">5000+</div>
                  <div className="text-sm text-muted-foreground">Партнеров</div>
                </div>
                <div className="text-center animate-scale-in" style={{ animationDelay: "0.2s" }}>
                  <div className="text-3xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">Поддержка</div>
                </div>
              </div>
            </div>
            <div className="animate-fade-in-up">
              <img 
                src="https://cdn.poehali.dev/projects/d843de39-ddeb-4740-93e4-d3a50a72526d/files/d722d4da-b286-4d7a-926f-c05463bcbebf.jpg" 
                alt="Success" 
                className="rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="benefits" className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Почему выбирают нас</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Мы создаем все условия для вашего успеха и профессионального роста
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl animate-fade-in-up">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                  <Icon name="TrendingUp" size={32} className="text-primary" />
                </div>
                <CardTitle className="text-2xl">Стабильный доход</CardTitle>
                <CardDescription className="text-base">
                  Получайте регулярный доход от продаж и бонусы за достижение целей
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                  <Icon name="Users" size={32} className="text-primary" />
                </div>
                <CardTitle className="text-2xl">Команда поддержки</CardTitle>
                <CardDescription className="text-base">
                  Профессиональная команда всегда готова помочь и поддержать вас
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                  <Icon name="Rocket" size={32} className="text-primary" />
                </div>
                <CardTitle className="text-2xl">Быстрый старт</CardTitle>
                <CardDescription className="text-base">
                  Начните работать сразу после регистрации с полным обучением
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                  <Icon name="Award" size={32} className="text-primary" />
                </div>
                <CardTitle className="text-2xl">Признание</CardTitle>
                <CardDescription className="text-base">
                  Награды, бонусы и призы за достижения и активность
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                  <Icon name="BookOpen" size={32} className="text-primary" />
                </div>
                <CardTitle className="text-2xl">Обучение</CardTitle>
                <CardDescription className="text-base">
                  Бесплатные курсы, тренинги и мастер-классы от экспертов
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                  <Icon name="Globe" size={32} className="text-primary" />
                </div>
                <CardTitle className="text-2xl">Развитие</CardTitle>
                <CardDescription className="text-base">
                  Карьерный рост и международные возможности для амбициозных
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section id="opportunities" className="py-20 px-4 bg-gradient-to-br from-accent/30 via-background to-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Твои возможности</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Выбери свой путь развития и достигай целей вместе с нами
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="animate-fade-in-up">
              <img 
                src="https://cdn.poehali.dev/projects/d843de39-ddeb-4740-93e4-d3a50a72526d/files/0fabed45-9967-4668-8a03-4e5462f16b69.jpg" 
                alt="Opportunities" 
                className="rounded-3xl shadow-2xl w-full"
              />
            </div>

            <div className="space-y-6 animate-fade-in">
              <Card className="bg-card/50 backdrop-blur-sm border-2 hover:border-primary transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl flex items-start gap-3">
                    <Icon name="Target" size={24} className="text-primary mt-1" />
                    <span>Личные продажи</span>
                  </CardTitle>
                  <CardDescription className="ml-9 text-base">
                    Продавай качественную продукцию и получай прямой доход от каждой продажи
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-2 hover:border-primary transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl flex items-start gap-3">
                    <Icon name="Network" size={24} className="text-primary mt-1" />
                    <span>Построение команды</span>
                  </CardTitle>
                  <CardDescription className="ml-9 text-base">
                    Создавай свою команду партнеров и получай бонусы с продаж всей структуры
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-2 hover:border-primary transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl flex items-start gap-3">
                    <Icon name="Gift" size={24} className="text-primary mt-1" />
                    <span>Бонусная программа</span>
                  </CardTitle>
                  <CardDescription className="ml-9 text-base">
                    Получай дополнительные бонусы, скидки и подарки за активность
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-2 hover:border-primary transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl flex items-start gap-3">
                    <Icon name="Star" size={24} className="text-primary mt-1" />
                    <span>Карьерный рост</span>
                  </CardTitle>
                  <CardDescription className="ml-9 text-base">
                    Повышай свой статус и открывай новые уровни вознаграждений
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Свяжитесь с нами</h2>
            <p className="text-xl text-muted-foreground">
              Оставьте заявку и мы свяжемся с вами в ближайшее время
            </p>
          </div>

          <Card className="border-2 animate-fade-in-up">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Ваше имя *
                  </label>
                  <Input
                    id="name"
                    placeholder="Иван Иванов"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="text-base"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="ivan@example.com"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="text-base"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Телефон *
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+7 (999) 123-45-67"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="text-base"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Сообщение
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Расскажите о себе..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="text-base"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full text-lg">
                  Отправить заявку
                  <Icon name="Send" className="ml-2" size={20} />
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="mt-12 grid md:grid-cols-3 gap-6 text-center animate-fade-in-up">
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Icon name="Mail" size={24} className="text-primary" />
              </div>
              <div>
                <div className="font-medium text-foreground">Email</div>
                <div className="text-sm text-muted-foreground">info@faberlic.ru</div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Icon name="Phone" size={24} className="text-primary" />
              </div>
              <div>
                <div className="font-medium text-foreground">Телефон</div>
                <div className="text-sm text-muted-foreground">8 (800) 555-35-35</div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Icon name="MessageCircle" size={24} className="text-primary" />
              </div>
              <div>
                <div className="font-medium text-foreground">Telegram</div>
                <div className="text-sm text-muted-foreground">@faberlic_team</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 bg-secondary/20 border-t border-border">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">Faberlic</h3>
              <p className="text-muted-foreground">
                Ваш путь к успеху начинается здесь
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-foreground">Навигация</h4>
              <div className="space-y-2">
                <button onClick={() => scrollToSection("hero")} className="block text-muted-foreground hover:text-primary transition-colors">
                  Главная
                </button>
                <button onClick={() => scrollToSection("benefits")} className="block text-muted-foreground hover:text-primary transition-colors">
                  Преимущества
                </button>
                <button onClick={() => scrollToSection("opportunities")} className="block text-muted-foreground hover:text-primary transition-colors">
                  Возможности
                </button>
                <button onClick={() => scrollToSection("contact")} className="block text-muted-foreground hover:text-primary transition-colors">
                  Контакты
                </button>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-foreground">Социальные сети</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                  <Icon name="Instagram" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                  <Icon name="Facebook" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                  <Icon name="Twitter" size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border text-center text-muted-foreground">
            <p>© 2024 Faberlic. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
