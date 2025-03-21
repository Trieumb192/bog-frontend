import React, { cloneElement, isValidElement, ReactElement, ReactNode, useState } from 'react';
import { Button as ShadButton } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Loader2, Save, Edit2, Trash2, Link } from 'lucide-react';
import { useTheme } from '../../contexts/theme-context';
import { cn } from '@/lib/utils';

interface CustomButtonProps {
  variant?: 'primary' | 'secondary' | 'save' | 'update' | 'delete' | 'cancel';
  label?: string;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  loadingText?: string;
  className?: string;
  type?: 'button' | 'submit' | 'reset';

  /** Icon customize */
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  iconSize?: number;

  /** Confirm Dialog */
  confirm?: boolean;
  confirmTitle?: string;
  confirmMessage?: string;
  confirmOkText?: string;
  confirmCancelText?: string;
  onConfirm?: () => void;

  /** Tooltip */
  tooltip?: string;

  /** Link */
  href?: string;
  target?: string;

  /** Optional */
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

const getButtonVariants = (theme: string) => ({
  primary: {
    className:
      theme === 'dark'
        ? 'bg-indigo-500 hover:bg-indigo-600 text-white shadow-md'
        : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-md',
    label: 'Primary',
    defaultLeftIcon: null,
  },
  secondary: {
    className:
      theme === 'dark'
        ? 'bg-gray-700 hover:bg-gray-600 text-white shadow-md'
        : 'bg-gray-300 hover:bg-gray-400 text-black shadow-md',
    label: 'Secondary',
    defaultLeftIcon: null,
  },
  save: {
    className:
      theme === 'dark'
        ? 'bg-green-500 hover:bg-green-600 text-white shadow-lg'
        : 'bg-green-600 hover:bg-green-700 text-white shadow-lg',
    label: 'Save',
    defaultLeftIcon: <Save />,
  },
  update: {
    className:
      theme === 'dark'
        ? 'bg-blue-500 hover:bg-blue-600 text-white shadow-lg'
        : 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg',
    label: 'Update',
    defaultLeftIcon: <Edit2 />,
  },
  delete: {
    className:
      theme === 'dark'
        ? 'bg-red-500 hover:bg-red-600 text-white shadow-lg'
        : 'bg-red-600 hover:bg-red-700 text-white shadow-lg',
    label: 'Delete',
    defaultLeftIcon: <Trash2 />,
  },
  cancel: {
    className:
      theme === 'dark'
        ? 'bg-gray-500 hover:bg-gray-600 text-white shadow-md'
        : 'bg-gray-600 hover:bg-gray-700 text-white shadow-md',
    label: 'Cancel',
    defaultLeftIcon: null,
  },
});

const CustomButton: React.FC<CustomButtonProps> = ({
  variant = 'primary',
  label,
  onClick,
  disabled = false,
  loading = false,
  loadingText,
  className = '',
  type = 'button',

  leftIcon,
  rightIcon,
  iconSize = 16,

  confirm = false,
  confirmTitle = 'Confirm',
  confirmMessage = 'Are you sure?',
  confirmOkText = 'OK',
  confirmCancelText = 'Cancel',
  onConfirm,

  tooltip,

  href,
  target,

  size = 'md',
  fullWidth = false,
}) => {
  const { theme } = useTheme();
  const [showConfirm, setShowConfirm] = useState(false);

  const handleClick = () => {
    if (confirm) {
      setShowConfirm(true);
    } else if (onClick) {
      onClick();
    }
  };

  const confirmAction = () => {
    if (onConfirm) {
      onConfirm();
    } else if (onClick) {
      onClick();
    }
    setShowConfirm(false);
  };

  const variants = getButtonVariants(theme);
  const { className: variantClass, label: defaultLabel, defaultLeftIcon } = variants[variant];

  const buttonSizeClass = {
    sm: 'px-3 py-1 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
  }[size];

  const renderIcon = (icon: ReactNode) => {
    if (!isValidElement(icon)) return undefined;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const iconElement = icon as ReactElement<any>;
    return cloneElement(iconElement, {
      className: cn(iconElement.props.className, `w-[${iconSize}px] h-[${iconSize}px]`),
    });
  };

  const buttonElement = (
    <ShadButton
      type={type}
      onClick={handleClick}
      disabled={disabled || loading}
      className={cn(
        'flex items-center justify-center rounded-xl gap-2 font-medium transition-all duration-200',
        buttonSizeClass,
        variantClass,
        disabled && 'opacity-50 cursor-not-allowed',
        loading && 'opacity-70',
        fullWidth && 'w-full',
        className
      )}
    >
      {loading && <Loader2 className="w-4 h-4 animate-spin" />}
      {!loading && renderIcon(leftIcon || defaultLeftIcon)}
      {loading ? loadingText || 'Loading...' : label || defaultLabel}
      {!loading && renderIcon(rightIcon)}
    </ShadButton>
  );

  const buttonWithLink = href ? (
    <Link href={href} target={target || '_self'}>
      {buttonElement}
    </Link>
  ) : (
    buttonElement
  );

  const buttonWithTooltip = tooltip ? (
    <Tooltip>
      <TooltipTrigger asChild>{buttonWithLink}</TooltipTrigger>
      <TooltipContent side="top">{tooltip}</TooltipContent>
    </Tooltip>
  ) : (
    buttonWithLink
  );

  return (
    <>
      {confirm ? (
        <Dialog open={showConfirm} onOpenChange={setShowConfirm}>
          <DialogTrigger asChild>{buttonWithTooltip}</DialogTrigger>
          <DialogContent
            className={cn('rounded-lg', theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white')}
          >
            <DialogHeader>
              <DialogTitle className="text-xl">{confirmTitle}</DialogTitle>
            </DialogHeader>
            <div className="text-sm">{confirmMessage}</div>
            <DialogFooter className="gap-2">
              <ShadButton variant="outline" onClick={() => setShowConfirm(false)}>
                {confirmCancelText}
              </ShadButton>
              <ShadButton
                className="bg-red-600 hover:bg-red-700 text-white"
                onClick={confirmAction}
              >
                {confirmOkText}
              </ShadButton>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      ) : (
        buttonWithTooltip
      )}
    </>
  );
};

export default CustomButton;
