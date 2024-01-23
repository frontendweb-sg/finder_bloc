import 'package:flutter/material.dart';
import 'package:mobile/config/theme/colors.dart';
import 'package:mobile/core/utils/enums.dart';

Widget button(
  BuildContext context, {
  ButtonVariant variant = ButtonVariant.filled,
  required String label,
  double? height = 55,
  double? width = double.infinity,
  Color? bgColor = AppColor.colorPrimary,
  Color? textColor = AppColor.colorWhite,
  required Function() onPressed,
}) {
  return switch (variant) {
    ButtonVariant.outlined => OutlinedButton(
        style: ButtonStyle(
          side: MaterialStatePropertyAll(
            BorderSide(
              width: 1,
              color: bgColor!,
              style: BorderStyle.solid,
            ),
          ),
        ),
        onPressed: onPressed,
        child: Text(label),
      ),
    ButtonVariant.text => TextButton(onPressed: onPressed, child: Text(label)),
    _ => SizedBox(
        width: width,
        height: height,
        child: ElevatedButton(
          style: ButtonStyle(
            foregroundColor: MaterialStatePropertyAll(textColor),
            backgroundColor: MaterialStatePropertyAll(bgColor),
          ),
          onPressed: onPressed,
          child: Text(label),
        ),
      )
  };
}
