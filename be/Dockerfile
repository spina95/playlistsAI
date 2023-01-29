FROM python:3.6
ENV PYTHONUNBUFFERED 1
RUN mkdir /be
WORKDIR /be
ADD requirements.txt /be/
RUN pip install --upgrade pip && pip install -r requirements.txt
ADD . /be/
CMD python manage.py runserver 0.0.0.0:80