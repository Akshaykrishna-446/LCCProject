from django import forms

class ReviewForm(forms.Form):
    product_id = forms.IntegerField(widget=forms.HiddenInput())
    content = forms.CharField(widget=forms.Textarea(attrs={'rows': 4}))
    rating = forms.IntegerField(min_value=1, max_value=5)
