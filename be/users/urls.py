from django.urls import include, path, re_path
from django.views.generic import TemplateView

from rest_auth.registration.views import (
    SocialAccountListView, SocialAccountDisconnectView
)

from . import views


# Frontend URLs

EMAIL_CONFIRMATION = r'^auth/confirm-email/(?P<key>[-:\w]+)$'

PASSWORD_RESET = (
    r'^auth/password/reset/confirm/'
    '(?P<uidb64>[0-9A-Za-z_\-]+)-'
    '(?P<token>[0-9A-Za-z]{1,13}-[0-9A-Za-z]{1,20})$'
)

# NOTE: If you change this URL you have to update the callback URL
# in the OAuth providers' accounts, too
OAUTH_CALLBACK = 'auth/social/{provider}/callback'


# URL patterns

google_urlpatterns = [
    path('auth-server/', views.Login.as_view(), name='google_auth_server'),
    path(
        'login/',
        views.CallbackCreate.as_view(),
        name='google_callback_login',
    ),
    path(
        'connect/',
        views.CallbackConnect.as_view(),
        name='google_callback_connect',
    ),
]


api_urlpatterns = [
    path('auth/', include('rest_auth.urls')),
    path('auth/registration/', include('rest_auth.registration.urls')),
    path('auth/social/google/', include(google_urlpatterns)),
    path(
        'auth/user/accounts/',
        SocialAccountListView.as_view(),
        name='social_account_list',
    ),
    path(
        'auth/user/accounts/<int:pk>/disconnect/',
        SocialAccountDisconnectView.as_view(),
        name='social_account_disconnect',
    ),
]


urlpatterns = [
    # The SPA serves these URLs but the backend has to know
    # where they point to for reference, don't change the url names.
    re_path(
        EMAIL_CONFIRMATION,
        TemplateView.as_view(),
        name='account_confirm_email',
    ),
    re_path(
        PASSWORD_RESET,
        TemplateView.as_view(),
        name='password_reset_confirm',
    ),
    path(
        OAUTH_CALLBACK.format(provider='google'),
        TemplateView.as_view(),
        name='google_callback',
    ),
    # This has to be last because rest_auth.registration.urls
    # also defines `account_confirm_email` what we override above.
    path('api/', include(api_urlpatterns)),
]